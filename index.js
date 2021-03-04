// project directory structure
// https://dev.to/devlcodes/file-structure-of-a-node-project-3opk
// https://blog.logrocket.com/the-perfect-architecture-flow-for-your-next-node-js-project/

// style guide
// google: https://google.github.io/styleguide/jsguide.html
// airbnb: https://github.com/airbnb/javascript

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
