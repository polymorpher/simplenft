require('dotenv').config()

const { TruffleProvider } = require('@harmony-js/core')
const { Account } = require('@harmony-js/account')

const HarmonyProvider = ({ key, url, chainId, gasLimit, gasPrice }) => {
  const truffleProvider = new TruffleProvider(
    url,
    {},
    { shardID: 0, chainId },
    gasLimit && gasPrice && { gasLimit, gasPrice },
  )
  truffleProvider.addByPrivateKey(key)
  const account = new Account(key)
  truffleProvider.setSigner(account.checksumAddress)
  return truffleProvider
}

module.exports = {
  networks: {
    'testnet': {
      provider: () => process.env.TESTNET_PRIVATE_KEY && HarmonyProvider({
        key: process.env.TESTNET_PRIVATE_KEY,
        url: 'https://api.s0.b.hmny.io',
        chainId: 2,
        gasLimit: 80000000,
        gasPrice: 28000000000
      }),
      network_id: 2,
      gas: 80000000
    },
    'mainnet': {
      provider: () => process.env.MAINNET_PRIVATE_KEY && HarmonyProvider({
        key: process.env.MAINNET_PRIVATE_KEY,
        url: 'https://api.s0.t.hmny.io',
        chainId: 1,
        gasLimit: 80000000,
        gasPrice: 28000000000
      }),
      network_id: 1,
      gas: 80000000
    }
  },

  compilers: {
    solc: {
      version: '0.8.4',
      settings: {
        optimizer: {
          enabled: true,
        },
      },
    },
  },
}
