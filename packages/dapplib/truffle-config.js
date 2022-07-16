require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'imitate prize flock tribe stone decrease night mistake hope knife food gesture'; 
let testAccounts = [
"0xea47f0b8f508e21adbc9dd1f7ec7b18c020727c2a548a87e6a24088386970725",
"0x31b9ab06f9e72821b770887361b99f24db7d3f1f0434d7352534a62f00d7bee6",
"0x439fa5131204dab08b56d36017d420349ba01d3db4b466f7c77dc313285faa67",
"0xdedc12a020d4ecfd095a099b68332b7ada2a9035caf1fc6d89c1a6899f8e8a48",
"0xf1842ae1ddd9d019e2088ab15adb4369d42229bae42ba39f1c7a2e1e647b3ebd",
"0x83f299feca012e68562690538bb7d73de3cc2f3a8995b76ae8fa45ebe1ec2551",
"0xa55e116e89e8ba57b3810d37d7082f593fdcabbbd585354238281cd9a70d2dba",
"0x54f16dc595f86c3a73c9109916f497df3776726e4a54c0c70cfc395a1468b51a",
"0xb393763ba51fdc71986e5d2969184a94cffd381c9632646919e2adae68ae937a",
"0xbe5b605440e7c19e594c30893ad32eab1f05f089ce53e9f7f5af70dc06c75f9b"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
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

