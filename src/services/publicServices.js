const axios = require('axios')
const getUsersModel = require('../models/getUsersModel')

module.exports = {
  /**
   * get users info
   * @param {*} req
   * @param {*} res
   */
  getUsers: async (req, res) => {
    try {
      const users = await getUsersModel()
      res.json(users)
    } catch (err) {
      console.log(err)
    }
  },
  /**
   * call /markets public api from bitFlyer
   * @param {*} req
   * @param {*} res
   */
  markets: async (req, res) => {
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
