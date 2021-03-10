// project directory structure
// https://dev.to/devlcodes/file-structure-of-a-node-project-3opk
// https://blog.logrocket.com/the-perfect-architecture-flow-for-your-next-node-js-project/

// style guide
// google: https://google.github.io/styleguide/jsguide.html
// airbnb: https://github.com/airbnb/javascript

const express = require('express')
const app = express()
const router = require('./routes/index')
const client = require('./config/db')

client.connect(err => {
  if (err) {
    console.error('connection error', err.stack)
  } else {
    console.log('connected to db successfully 🚀🚀🚀')
  }
})

require('dotenv').config()

app.set('port', process.env.PORT || 3000)
app.use('/', router)
app.listen(app.get('port'), () => {
  console.log(`Server running at http://localhost:${app.get('port')}`)
})
