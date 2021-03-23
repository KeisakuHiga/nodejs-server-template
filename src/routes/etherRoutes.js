const router = require('express').Router()
const getUserBalance = require('../services/getUserBalanceService')
// const { provider } = require('../contract/contract')

/**
 * @param {string} account
 * @return {number} balance
 */
router.get('/getUserBalance', async (req, res) => {
  try {
    // const accounts = await provider.listAccounts()
    // const balance = await getUserBalance(accounts[0])
    const { account } = req.body
    const balance = await getUserBalance(account)
    res.json(balance)
  } catch (err) {
    console.log(err)
  }
})

module.exports = router
