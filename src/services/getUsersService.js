const getUsersModel = require('../models/getUsersModel')

/**
 * get users info
 * @return {Object[]} users
 * @return {Object} user
 * @return {Object} user.user_id
 * @return {Object} user.user_first_name
 * @return {Object} user.user_last_name
 * @return {Object} user.user_age
 */
module.exports = async () => {
  return await getUsersModel()
}
