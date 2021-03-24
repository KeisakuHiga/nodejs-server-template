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
    console.log('L19: ', receiver, amount)
    await sendCoin('0x94163E64dfC257182cb2644144C8076FCFC4Ca5f', 200)
    res.json()
  } catch (err) {
    console.error(err)
    throw err
  }
})

module.exports = router
