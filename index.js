"use strict";
exports.__esModule = true;
exports.mainnet = "mainnet";
exports.testnet = "testnet";
exports.mainnetRegex = /^(bc1|[13])[a-zA-HJ-NP-Z0-9]{25,39}$/;
exports.testnetRegex = /^(tb1|[2nm]|bcrt)[a-zA-HJ-NP-Z0-9]{25,40}$/;
/**
* Validates a Bitcoin address, both Base58 and Bech32 ones, both Mainnet and Testnet ones
*
* @param {string} address The Bitcoin address to validate
* @returns {("mainnet"|"testnet"|undefined)}
*/
exports.isValidBitcoinAddress = function (address) {
    // @see http://mokagio.github.io/tech-journal/2014/11/21/regex-bitcoin.html
    // @see https://stackoverflow.com/a/48643915
    // mixed together here https://regex101.com/r/v0g6bv/1
    // mainnet addresses
    if (exports.mainnetRegex.test(address)) {
        return exports.mainnet;
    }
    // testnet addresses
    if (exports.testnetRegex.test(address)) {
        return exports.testnet;
    }
    return undefined;
};
