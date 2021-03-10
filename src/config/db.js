const { Client } = require('pg')
require('dotenv').config()
const pgClientConfig = {
  user: process.env.PGUSER, // DB のユーザー名を指定
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD, // DB のパスワードを指定
  port: process.env.PGPORT
}
const client = new Client(pgClientConfig)
module.exports = client
