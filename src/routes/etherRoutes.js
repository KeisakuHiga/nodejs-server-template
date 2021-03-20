const router = require('express').Router()
const getUserBalance = require('../services/getUserBalanceService')
const { provider } = require('../contract/contract')

router.get('/getUserBalance', async (req, res) => {
  try {
    const accounts = await provider.listAccounts()
    const balance = await getUserBalance(accounts[0])
    res.json(balance)
  } catch (err) {
    console.log(err)
  }
})

module.exports = router
