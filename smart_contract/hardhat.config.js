require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/PKzU-Z_rjPD5FtXDw_WI5XNO7MIMAdgi',
      accounts: ['80db5959f2b2ee6517f48103faf14a4a79aabf5931410751017142d836e483ab'],
    },
  },
};