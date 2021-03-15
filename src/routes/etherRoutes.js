const router = require('express').Router()
const getUserBalance = require('../services/getUserBalanceService')

router.get('/getUserBalance', async (req, res) => {
  try {
    const balance = await getUserBalance()
    res.json(balance)
  } catch (err) {
    console.log(err)
  }
})

module.exports = router
