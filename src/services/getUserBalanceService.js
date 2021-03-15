const { ethers, BigNumber } = require('ethers')

/**
 * get users balance
 * @return {Object} user
 */
module.exports = async () => {
  const url = 'http://localhost:7545'
  const provider = new ethers.providers.JsonRpcProvider(url)
  // const signer = provider.getSigner()
  // const blockNumber = await provider.getBlockNumber()
  const balance = await provider.getBalance('0xa2224eeA17DEacB3F9140fd2920f11Baa4A16258')
  return balance
}
