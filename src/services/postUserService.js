const postUserModel = require('../models/postUserModel')

module.exports = {
  /**
   * create new user to db
   * @param {*} req
   * @param {*} res
   */
  postUser: async (req, res) => {
    try {
      const params = req.body
      await postUserModel(params)
      res.json({})
    } catch (err) {
      console.log(err)
    }
  }
}
