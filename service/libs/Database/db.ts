import knex from 'knex'

export default knex({
  client: 'mysql',
  connection: {
    host: process.env.DB_HOST ?? 'icare-db.mysql.database.azure.com',
    user: process.env.DB_USER ?? 'icare',
    password: process.env.DB_PASS ?? 'care2023!!',
    database: process.env.DB_DATABASE ?? 'icare',
    options: {
      encrypt: true
    }
  }
})
