const { Sequelize, DataTypes } = require('sequelize')
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

const sequelize = new Sequelize(process.env.PGDATABASE, process.env.PGUSER, process.env.PGPASSWORD, {
  host: process.env.PGHOST,
  dialect: 'postgres'
})

const User = sequelize.define('users', {
  // Model attributes are defined here
  userId: {
    type: DataTypes.STRING,
    allowNull: false
  },
  userFirstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  userLastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  userAge: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
}, {
  // Other model options go here
})

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User) // true

module.exports = { client, sequelize, User }
