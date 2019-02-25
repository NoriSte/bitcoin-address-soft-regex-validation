/**
 * Validates a Bitcoin address, both Base58 and Bech32 ones, both Mainnet and Testnet ones
 */
declare function isValidBitcoinAddress(address:string, mainnet:boolean): boolean;

export default isValidBitcoinAddress;
