param name string
param location string = 'Korea Central'

resource mySqlServer 'Microsoft.DBforMySQL/servers@2017-12-01' = {
  name: '${name}-db'
  location: location
  sku: {
    name: 'B_Gen5_1'
    tier: 'Basic'
    capacity: 1
    family: 'Gen5'
  }
  properties: {
    version: '8.0'
    sslEnforcement: 'Disabled'
    storageProfile: {
      storageMB: 5120
    }
    createMode: 'Default'
    administratorLogin: 'icare'
    administratorLoginPassword: 'care2023!!'
    publicNetworkAccess: 'Enabled'
  }

  resource firewall_all 'firewallRules' = {
    name: 'allow-all-IPs'
    properties: {
      startIpAddress: '0.0.0.0'
      endIpAddress: '255.255.255.255'
    }
  }
}

resource mySqlDatabase 'Microsoft.DBforMySQL/servers/databases@2017-12-01' = {
  parent: mySqlServer
  name: 'icare'
  properties: {
    charset: 'utf8mb4'
    collation: 'utf8mb4_unicode_ci'
  }
}

resource storageAccount 'Microsoft.Storage/storageAccounts@2021-04-01' = {
  name: '${name}-storageaccount'
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
  name: '${name}-storageaccount/default/images'
  properties: {
    publicAccess: 'None'
  }
}

resource sasKey 'Microsoft.Storage/storageAccounts/blobServices/containers/sasTokens@2021-08-01' = {
  parent: container
  name: 'default'
  properties: {
    permissions: {
      read: true
      write: true
      delete: true
      list: true
    }
  }
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

resource webApp 'Microsoft.Web/sites@2021-02-01' = {
  name: '${name}-app'
  location: location
  properties: {
    serverFarmId: appServicePlan.id
    siteConfig: {
      appCommandLine: ''
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
