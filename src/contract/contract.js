const { ethers } = require('ethers')
const secrets = require('../../secrets.json')

// running ganache locally
const url = 'http://localhost:7545'
const provider = new ethers.providers.JsonRpcProvider(url)

// set Ganache's mnemonic
const mnemonic = secrets.mnemonic

// path of Ganache: m/44'/60'/0'/0/(account_index)
const path = "m/44'/60'/0'/0/0"

// create an wallet instance from a mnemonic phrase
let wallet = ethers.Wallet.fromMnemonic(mnemonic, path)
wallet = wallet.connect(provider)

// create an contract instance
const contractAddress = '0x0eF0b8157aE5E19bEb6A3e285Dcc9115CfFCC5D3'
const contractAbi = [{ inputs: [], payable: false, stateMutability: 'nonpayable', type: 'constructor' }, { anonymous: false, inputs: [{ indexed: true, internalType: 'address', name: '_from', type: 'address' }, { indexed: true, internalType: 'address', name: '_to', type: 'address' }, { indexed: false, internalType: 'uint256', name: '_value', type: 'uint256' }], name: 'Transfer', type: 'event' }, { constant: false, inputs: [{ internalType: 'address', name: 'receiver', type: 'address' }, { internalType: 'uint256', name: 'amount', type: 'uint256' }], name: 'sendCoin', outputs: [{ internalType: 'bool', name: 'sufficient', type: 'bool' }], payable: false, stateMutability: 'nonpayable', type: 'function' }, { constant: true, inputs: [{ internalType: 'address', name: 'addr', type: 'address' }], name: 'getBalanceInEth', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [{ internalType: 'address', name: 'addr', type: 'address' }], name: 'getBalance', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function' }]
const contract = new ethers.Contract(contractAddress, contractAbi, wallet)

module.exports = {
  provider,
  contract,
  wallet
}
