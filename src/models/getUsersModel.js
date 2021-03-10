const client = require('../config/db')

const query = `
      SELECT *
        FROM users;
      `

module.exports = async () => {
  const result = await client.query(query)
  client.end()
  return {
    users: result.rows
  }
}
