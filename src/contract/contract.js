const config = require('config')
const { ethers } = require('ethers')
const secrets = require('../../secrets.json')

// running ganache locally
const url = config.contract.url
const provider = new ethers.providers.JsonRpcProvider(url)

// set Ganache's mnemonic
const mnemonic = secrets.mnemonic

// path of Ganache: m/44'/60'/0'/0/(account_index)
const path = config.contract.path

// create an wallet instance from a mnemonic phrase
let wallet = ethers.Wallet.fromMnemonic(mnemonic, path)
wallet = wallet.connect(provider)

// create an contract instance
const contractAddress = config.contract.contractAddress
const contractAbi = config.contract.contractAbi
const contract = new ethers.Contract(contractAddress, contractAbi, wallet)

module.exports = {
  provider,
  contract,
  wallet
}
