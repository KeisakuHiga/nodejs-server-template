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
  const sendTransactionPromise = contract.sendCoin(receiver, amount)
  sendTransactionPromise.then(function (tx) {
    console.log(tx)
  })
}
