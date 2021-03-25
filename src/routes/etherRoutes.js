const router = require('express').Router()
const getUserBalance = require('../services/getUserBalanceService')
const sendCoin = require('../services/sendCoinService')

router.get('/getUserBalance', async (req, res) => {
  try {
    const { account } = req.body
    const balance = await getUserBalance(account)
    res.json(balance)
  } catch (err) {
    console.error(err)
    throw err
  }
})

router.post('/sendCoin', async (req, res) => {
  try {
    const { receiver, amount } = req.body
    // validation here before invoking the service
    // validation is coming here
    // invoke service
    await sendCoin(receiver, amount)
    res.json()
  } catch (err) {
    console.error(err)
    throw err
  }
})

module.exports = router
