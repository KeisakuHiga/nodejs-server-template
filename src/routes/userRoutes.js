const router = require('express').Router()
const getUsers = require('../services/getUsersService')
const postUser = require('../services/postUserService')

router.get('/getUsers', async (req, res) => {
  try {
    const users = await getUsers()
    res.json(users)
  } catch (err) {
    console.log(err)
  }
})

router.post('/postUser', async (req, res) => {
  try {
    const result = await postUser(req.body)
    res.json(result)
  } catch (err) {
    console.log(err)
  }
})

module.exports = router
