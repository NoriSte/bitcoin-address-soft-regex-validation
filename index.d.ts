declare const mainnet:string;
declare const testnet:string;
declare const mainnetRegex:RegExp;
declare const testnetRegex:RegExp;
declare function isValidBitcoinAddress(address:string):string|undefined;

export { mainnet, testnet, mainnetRegex, testnetRegex, isValidBitcoinAddress };
