const axios = require('axios')
const { Client } = require('pg')

const client = new Client({
  user: process.env.DB_USER, // DB のユーザー名を指定
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD, // DB のパスワードを指定
  port: process.env.DB_PORT
})
console.log(client)
client.connect()

module.exports = {
  /**
   * call /markets public api from bitFlyer
   * @param {*} req
   * @param {*} res
   */
  markets: async (req, res) => {
    try {
      const query = `
      SELECT *
        FROM users;
      `
      const result = await client.query(query)
      console.log(result)
      client.end()
    } catch (err) {
      console.log(err)
    }
    try {
      const { data } = await axios.get('https://api.bitflyer.com/v1/markets')
      res.json(data)
    } catch (err) {
      console.log(err)
    }
  },
  /**
   * call /board public api from bitFlyer
   * @param {*} req
   * @param {*} res
   */
  board: async (req, res) => {
    try {
      const { data } = await axios.get('https://api.bitflyer.com/v1/board')
      res.json(data)
    } catch (err) {
      console.log(err)
    }
  },
  /**
   * call /ticker public api from bitFlyer
   * @param {*} req
   * @param {*} res
   */
  ticker: async (req, res) => {
    try {
      const { data } = await axios.get('https://api.bitflyer.com/v1/ticker')
      res.json(data)
    } catch (err) {
      console.log(err)
    }
  },
  /**
   * call /executions public api from bitFlyer
   * @param {*} req
   * @param {*} res
   */
  executions: async (req, res) => {
    try {
      const { data } = await axios.get('https://api.bitflyer.com/v1/executions')
      res.json(data)
    } catch (err) {
      console.log(err)
    }
  },
  /**
   * call /getboardstate public api from bitFlyer
   * @param {*} req
   * @param {*} res
   */
  boardstate: async (req, res) => {
    try {
      const { data } = await axios.get('https://api.bitflyer.com/v1/getboardstate')
      res.json(data)
    } catch (err) {
      console.log(err)
    }
  },
  /**
   * call /gethealth public api from bitFlyer
   * @param {*} req
   * @param {*} res
   */
  health: async (req, res) => {
    try {
      const { data } = await axios.get('https://api.bitflyer.com/v1/gethealth')
      res.json(data)
    } catch (err) {
      console.log(err)
    }
  },
  /**
   * call /getchats public api from bitFlyer
   * @param {*} req
   * @param {*} res
   */
  chats: async (req, res) => {
    try {
      const { data } = await axios.get('https://api.bitflyer.com/v1/getchats')
      res.json(data)
    } catch (err) {
      console.log(err)
    }
  }
}
