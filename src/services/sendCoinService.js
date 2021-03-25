const { contract } = require('../contract/contract')

/**
 * send coin
 * @param {string} receiver
 * @param {number} amount
 * @return {}
 * reference for sending a transaction is here: https://github.com/ethers-io/ethers.js/issues/461
 */
module.exports = async (receiver, amount) => {
  // Send the transaction
  return await contract.functions.sendCoin(receiver, amount)
}
