const TestERC721 = artifacts.require('TestERC721')
const web3 = require('web3')

module.exports = function (deployer, network, accounts) {
  deployer.deploy(TestERC721, [0x1, 0x2], ['ipfs://QmVvTFvBd2mBBvJfzBdURwMkdFHwcv2jsCL6tyESwirseY', 'ipfs://QmSq5Ymu5rKgJeSt5AkCUDKvNAuQgAuVPSejHbQQYPBFPi']).then(function () {
    console.log(`Network=${network}. Deployer address=${TestERC721.address}. Owner address=${accounts[0]}`)
  }) // End TestToken deployment
}
