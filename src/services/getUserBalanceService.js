const { provider, contract } = require('../config/contract')
/**
 * get user' balance
 * @return {Object} user
 */
module.exports = async () => {
  // getBalance で、accounts[0]のMetaCoinのbalanceのバランスを取得
  const { getBalance } = contract.functions
  const accounts = await provider.listAccounts()
  const providerCoinBalance = await getBalance(accounts[0])
  // Hexadecimal to Decimal
  return parseInt(providerCoinBalance[0]._hex, 16)
}
