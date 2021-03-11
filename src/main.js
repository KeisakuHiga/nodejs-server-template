// project directory structure
// https://dev.to/devlcodes/file-structure-of-a-node-project-3opk
// https://blog.logrocket.com/the-perfect-architecture-flow-for-your-next-node-js-project/

// style guide
// google: https://google.github.io/styleguide/jsguide.html
// airbnb: https://github.com/airbnb/javascript

const express = require('express')
const app = express()
const router = require('./routes/index')
const { sequelize, client } = require('./config/db')

// client.connect(err => {
//   if (err) {
//     console.error('connection error', err.stack)
//   } else {
//     console.log('connected to db successfully 🚀🚀🚀')
//   }
// })

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })

require('dotenv').config()

app.set('port', process.env.PORT || 3000)
app.use('/', router)
app.listen(app.get('port'), () => {
  console.log(`Server running at http://localhost:${app.get('port')}`)
})
