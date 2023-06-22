@description('Specifies the location for resources.')
param location string = 'koreacentral'

param randomSuffix string

// Create resource group
resource rg_icare 'Microsoft.Resources/resourceGroups@2021-04-01' = {
  name: 'icare-resourcegroup'
  location: location
}

// Create storage account
resource storageAccount 'Microsoft.Storage/storageAccounts@2021-06-01' = {
  name: 'icarestorage-${randomSuffix}'
  location: 'koreacentral'
  sku: {
    name: 'Standard_LRS'
  }
  kind: 'StorageV2'
  accessTier: 'Hot'
  enableHttpsTrafficOnly: true
}

// Create storage container
resource storageContainer 'Microsoft.Storage/storageAccounts/blobServices/containers@2021-06-01' = {
  parent: storageAccount
  name: 'images'
}

// Generate SAS token for storage container
resource storageSasToken 'Microsoft.Storage/storageAccounts/blobServices/containers/sasTokens@2021-06-01' = {
  parent: storageContainer
  properties: {
    startTime: utcNow()
    expiryTime: dateTimeAdd(utcNow(), '365', 'day')
    permissions: {
      read: true
      write: true
      delete: true
      list: true
    }
  }
}

// Create MySQL server
resource mysqlServer 'Microsoft.DBforMySQL/servers@2021-06-01-preview' = {
  name: 'icare-mysqlserver'
  location: 'koreacentral'
  sku: {
    name: 'GP_Gen5_2'
    tier: 'GeneralPurpose'
    family: 'Gen5'
    capacity: 2
  }
  properties: {
    version: '8.0'
    storageProfile: {
      storageMB: 51200
    }
    createMode: 'Default'
    administratorLogin: 'icare'
    administratorLoginPassword: 'care2023!'
    sslEnforcement: 'Enabled'
    charset: 'utf8mb4'
    collation: 'utf8mb4_general_ci'
  }
}

// Create MySQL database
resource mysqlDatabase 'Microsoft.DBforMySQL/servers/databases@2021-06-01-preview' = {
  parent: mysqlServer
  name: 'icare'
  properties: {
    charset: 'utf8mb4'
    collation: 'utf8mb4_general_ci'
  }
}

// Generate random JWT secret
var jwtSecret = randomstring(32)

// Create App Service Plan
resource appServicePlan 'Microsoft.Web/serverfarms@2021-02-01' = {
  name: 'icare-appserviceplan'
  location: 'koreacentral'
  sku: {
    name: 'B1'
    tier: 'Basic'
    size: 'B1'
    family: 'B'
    capacity: 1
  }
  properties: {
    reserved: true
  }
}

// Create App Service
resource appService 'Microsoft.Web/sites@2021-02-01' = {
  name: 'icare-appservice'
  location: 'koreacentral'
  properties: {
    serverFarmId: appServicePlan.id
    siteConfig: {
      appSettings: [
        {
          name: 'DB_HOST'
          value: mysqlServer.properties.fullyQualifiedDomainName
        },
        {
          name: 'DB_USERNAME'
          value: 'icare'
        },
        {
          name: 'DB_PASSWORD'
          value: 'care2023!'
        },
        {
          name: 'DB_DATABASE'
          value: 'icare'
        },
        {
          name: 'JWT_SECRET'
          value: jwtSecret
        },
        {
          name: 'AZURE_STORAGE_SAS_KEY'
          value: storageSasToken.properties.accessToken
        },
        {
          name: 'AZURE_STORAGE_ACCOUNT'
          value: storageAccount.name
        }
      ]
      linuxFxVersion: 'NODE|18.16.1'
    }
  }
}

// Deploy source code from GitHub
resource sourceControl 'Microsoft.Web/sites/sourcecontrols@2021-02-01' = {
  parent: appService
  name: 'icare-sourcecontrol'
  properties: {
    repoUrl: 'https://github.com/hackersground-kr/Na-a'
    branch: 'backend'
    isManualIntegration: true
  }
}

// Build and deploy the app
resource buildDeployment 'Microsoft.Web/sites/extensions@2021-02-01' = {
  parent: appService
  name: 'icare-builddeployment'
  properties: {
    type: 'zip'
    kind: 'runFromBlob'
    url: sourceControl.properties.deploymentUrl
    properties: {
      'packageUri': sourceControl.properties.deploymentUrl
    }
  }
}

// Start the app
resource startApp 'Microsoft.Web/sites/startsiteextensions@2021-02-01' = {
  parent: appService
  name: 'icare-startapp'
}
