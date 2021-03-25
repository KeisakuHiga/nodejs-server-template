const { contract } = require('../contract/contract')
/**
 * get user' balance
 * @param {string} address
 * @return {number} userBalance
 */
module.exports = async (address) => {
  // getBalance で、引数で指定されたアドレスののMetaCoinのbalanceのバランスを取得
  const providerCoinBalance = await contract.functions.getBalance(address)
  // Hexadecimal to Decimal
  return parseInt(providerCoinBalance[0]._hex, 16)
}
