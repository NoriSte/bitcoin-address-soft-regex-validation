/**
* Validates a Bitcoin address, both Base58 and Bech32 ones, both Mainnet and Testnet ones
*
* @param {string} address The Bitcoin address to validate
* @param {boolean=true} mainnet If you want to check a Mainnet or Testnet address
* @returns {boolean}
*/
const isValidBitcoinAddress = (address, mainnet=true) => {
    // @see http://mokagio.github.io/tech-journal/2014/11/21/regex-bitcoin.html
    // @see https://stackoverflow.com/a/48643915
    // mixed together here https://regex101.com/r/v0g6bv/1

    // mainnet addresses
    if (mainnet) {
        const re = /^(bc1|[13])[a-zA-HJ-NP-Z0-9]{25,39}$/;
        return re.test(address);
    }

    // testnet addresses
    else {
        const re = /^(tb1|[2nm]|bcrt)[a-zA-HJ-NP-Z0-9]{25,40}$/;
        return re.test(address);
    }
};

module.exports = isValidBitcoinAddress;
