require('hardhat-contract-sizer')
require('@nomiclabs/hardhat-waffle')
require('solidity-coverage')
require('hardhat-gas-reporter')
require('@nomiclabs/hardhat-etherscan')
require('dotenv').config()

const GWEI = 1000000000

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const config = {
  defaultNetwork: 'hardhat',
