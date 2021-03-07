require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom private boil suggest name riot magic artwork include inform bottom trade'; 
let testAccounts = [
"0xf1dc4342c1336675e824042ce652075d347b95790d815af30a13d5b7783045a4",
"0x103012eff3b92188a601694501c6b5ddf3862eeabf79bbc0633b244298b58796",
"0x88e27b71b8dbbcd8b63b8debfaefec309ca3118a56073a09a7d5a352b0957526",
"0xa506c2478afb1ef894f4494b89ab8cfe901d50ad7e72915cc7eac50669909e3c",
"0x16040dda82d5034908db7af7e9f6128ecf7a2cf324ab024b92d3ea7140e95f36",
"0xd125fa7f30ad403b2210cdd006d984d8a085f9c8a09b90de6930253e23efa5dd",
"0xfe0e5c13bf356e655dce96fd95657b49c030d4c70849b2d5400e5deca4379a6f",
"0x88aab653403014d410335941640ef289ab2c15a12d53276455f0b246e52bb388",
"0x3409f6d2f6a158251f28d18e13d94052480c27790a4cbe7f876916f653ee43b6",
"0x23f4e03e6f782c8b48118c0ea34a05fc29ca020f5280bb800342ac76bab6e794"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
