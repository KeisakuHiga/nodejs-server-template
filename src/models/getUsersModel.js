const { User } = require('../config/db')

module.exports = async () => {
  const users = await User.findAll({
    attributes: [
      'user_id',
      'user_first_name',
      'user_last_name',
      'user_age']
  })
  // console.log(users.every(user => user instanceof User)) // true
  // console.log('All users:', JSON.stringify(users, null, 2))
  return users
}
