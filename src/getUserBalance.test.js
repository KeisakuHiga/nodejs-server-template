/* eslint-disable no-undef */
const getUserBalance = require('../src/services/getUserBalanceService')

test('get users balance', async () => {
  const { provider } = require('../src/contract/contract')
  const accounts = await provider.listAccounts()
  const balance = await getUserBalance(accounts[0])
  expect(balance).toBe(10000)
})
