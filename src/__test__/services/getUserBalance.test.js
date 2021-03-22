/* eslint-disable no-undef */
const getUserBalance = require('../../services/getUserBalanceService')

test('get users balance', async () => {
  const { provider } = require('../../contract/contract')
  const accounts = await provider.listAccounts()
  const balance = await getUserBalance(accounts[0])
  expect(balance).toBe(10000)
})
