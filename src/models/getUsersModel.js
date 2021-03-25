const { User } = require('../middleware/db')

module.exports = async () => {
  const users = await User.findAll({
    attributes: [
      'user_id',
      'user_first_name',
      'user_last_name',
      'user_age']
  })
  return users
}
