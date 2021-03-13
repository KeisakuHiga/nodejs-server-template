const postUserModel = require('../models/postUserModel')

/**
 * post a new user
 * @param {Object} userInfo
 * @param {Object} userInfo.userFirstName
 * @param {Object} userInfo.userLasttName
 * @param {Object} userInfo.userAge
 * @return {Object} {}
 */
module.exports = async (userInfo) => {
  return await postUserModel(userInfo)
}
