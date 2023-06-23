param name string
param location string = 'Korea Central'

resource cosmosDbAccount 'Microsoft.DocumentDB/databaseAccounts@2021-03-15' = {
  name: '${name}-cosmosdb'
  location: location
  kind: 'MongoDB'
  properties: {
    databaseAccountOfferType: 'Standard'
    locations: [
      {
        locationName: location
        failoverPriority: 0
      }
    ]
  }
}

resource cosmosDbDatabase 'Microsoft.DocumentDB/databaseAccounts/mongodbDatabases@2021-03-15' = {
  parent: cosmosDbAccount
  name: 'icare'
  properties: {
    resource: {
      id: 'icare'
      shardKey: { '/shardKeyProperty': 'Hash"'}
      indexingPolicy: {
        includedPaths: [
          {
            path: '/*'
            indexes: [
              {
                kind: 'Range'
                dataType: 'Number'
                precision: -1
              }
            ]
          }
        ]
      }
    }
  }
}

var cosmosDbKeys = cosmosDbAccount.listConnectionStrings().connectionStrings[0].connectionString


resource storageAccount 'Microsoft.Storage/storageAccounts@2021-04-01' = {
  name: '${name}serviceac'
  location: location
  kind: 'StorageV2'
  sku: {
    name: 'Standard_LRS'
  }
  properties: {
    accessTier: 'Hot'
    supportsHttpsTrafficOnly: true
  }
}

resource container 'Microsoft.Storage/storageAccounts/blobServices/containers@2021-08-01' = {
  name: '${storageAccount.name}/default/images'
  properties: {
    publicAccess: 'None'
  }
  dependsOn: [
    storageAccount
  ]
}

resource appServicePlan 'Microsoft.Web/serverfarms@2021-02-01' = {
  name: '${name}-appserviceplan'
  location: location
  sku: {
    name: 'B1'
    tier: 'Basic'
  }
  properties: {
    reserved: true
    hyperV: false
    numberOfWorkers: 1
    perSiteScaling: false
    maximumElasticWorkerCount: 1
    isSpot: false
    isXenon: false
  }
}

var storageAccountKeys = listKeys(storageAccount.id, '2021-04-01')

output storageAccountToken string = storageAccountKeys.keys[0].value


resource webApp 'Microsoft.Web/sites@2021-02-01' = {
  name: '${name}-app-hackers'
  location: location
  properties: {
    serverFarmId: appServicePlan.id
    siteConfig: {
      appCommandLine: 'cd service; pm2 --no-daemon start ecosystem.config.js'
      linuxFxVersion: 'NODE|18-lts'
      appSettings: [
        {
          name: 'MONGODB'
          value: cosmosDbKeys
        }
        {
          name: 'STORAGE_ACCOUNT_NAME'
          value: storageAccount.name
        }
        {
          name: 'STORAGE_ACCOUNT_KEY'
          value: storageAccountKeys.keys[0].value
        }
        {
          name: 'JWT_SECRET'
          value: 'THISISSUPERSECRETVALUE'
        }
      ]
    }
  }
}
