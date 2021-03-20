const { ethers } = require('ethers')

// local で Ganache を走らせている
const url = 'http://localhost:7545'
const provider = new ethers.providers.JsonRpcProvider(url)

// コントラクトインスタンスを作成する
const metaCoinAddress = '0x0eF0b8157aE5E19bEb6A3e285Dcc9115CfFCC5D3'
const metaCoinAbi = [{ inputs: [], payable: false, stateMutability: 'nonpayable', type: 'constructor' }, { anonymous: false, inputs: [{ indexed: true, internalType: 'address', name: '_from', type: 'address' }, { indexed: true, internalType: 'address', name: '_to', type: 'address' }, { indexed: false, internalType: 'uint256', name: '_value', type: 'uint256' }], name: 'Transfer', type: 'event' }, { constant: false, inputs: [{ internalType: 'address', name: 'receiver', type: 'address' }, { internalType: 'uint256', name: 'amount', type: 'uint256' }], name: 'sendCoin', outputs: [{ internalType: 'bool', name: 'sufficient', type: 'bool' }], payable: false, stateMutability: 'nonpayable', type: 'function' }, { constant: true, inputs: [{ internalType: 'address', name: 'addr', type: 'address' }], name: 'getBalanceInEth', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function' }, { constant: true, inputs: [{ internalType: 'address', name: 'addr', type: 'address' }], name: 'getBalance', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function' }]
const contract = new ethers.Contract(metaCoinAddress, metaCoinAbi, provider)

module.exports = {
  provider,
  contract
}
