const { contract } = require('../contract/contract')
/**
 * get user' balance
 * @param {string} address
 * @return {number} userBalance
 */
module.exports = async (address) => {
  // getBalance で、引数で指定されたアドレスののMetaCoinのbalanceのバランスを取得
  const { getBalance } = contract.functions
  const providerCoinBalance = await getBalance(address)
  // Hexadecimal to Decimal
  return parseInt(providerCoinBalance[0]._hex, 16)
}
