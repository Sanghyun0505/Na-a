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
output primaryConnectionString string = cosmosDbKeys


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

var sasConfig = {
  signedExpiry: '2023-06-30T23:59:59.0000000Z'
  signedResourceTypes: 'sco'
  signedPermission: 'rw'
  signedServices: 'b'
  signedProtocol: 'https'
}

// Alternatively, we could use listServiceSas function
var sasToken = storageAccount.listAccountSas(storageAccount.apiVersion, sasConfig).accountSasToken
output sastoken string = sasToken


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

resource webApp 'Microsoft.Web/sites@2021-02-01' = {
  name: '${name}-app-hackers'
  location: location
  properties: {
    serverFarmId: appServicePlan.id
    siteConfig: {
      appCommandLine: 'pm2 --no-daemon start ecosystem.config.js'
      linuxFxVersion: 'NODE|18-lts'
      appSettings: [
        {
          name: 'ENV_VARIABLE_1'
          value: 'value1'
        }
        {
          name: 'ENV_VARIABLE_2'
          value: 'value2'
        }
      ]
    }
  }
}
