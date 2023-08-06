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
networks: {
    hardhat: {
   blockGasLimit: 19000000,
      chainId: 31338
 },
    local: {
 // npx hardhat node --port 7547 --fork https://bsc-dataseed.binance.org
      chainId: 31337,
   },
    local: {
      // npx hardhat node --port 7547 --fork https://bsc-dataseed.binance.org
  chainId: 31337,
      url: 'http://localhost:7547',
      gasPrice: 3 * GWEI,
 blockGasLimit: 20000000, // 20M
     explorer: 'https://bscscan.com'
    },
    basegoerli: {
 url: 'https://goerli.base.org',
 chainId: 84531,
      accounts: [process.env.PRIVATE_KEY],
 gasPrice: 1 * GWEI,
      explorer: 'https://goerli.basescan.org'
  },
    fuji: {
      url: 'https://ava-testnet.public.blastapi.io/ext/bc/C/rpc',
 chainId: 43113,
      accounts: [process.env.PRIVATE_KEY],
gasPrice: 1 * GWEI,
      explorer: 'https://goerli.basescan.org'
 },
    fuji: {
 url: 'https://ava-testnet.public.blastapi.io/ext/bc/C/rpc',
chainId: 43113,
      accounts: [process.env.PRIVATE_KEY],
 gasPrice: 33 * GWEI,
 explorer: 'https://testnet.snowtrace.io'
    },
  bscTestnet: {
      url: 'https://data-seed-prebsc-1-s1.binance.org:8545',
