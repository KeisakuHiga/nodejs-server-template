const client = require('../middleware/db')

const query = `
      INSERT INTO users(
        user_id,
        user_first_name,
        user_last_name,
        user_age
      ) VALUES(
        '002',
        'Taro',
        'Yamada',
        33
        );
      `

module.exports = async () => {
  const result = await client.query(query)
  client.end()
  return {
    users: result.rows
  }
}
