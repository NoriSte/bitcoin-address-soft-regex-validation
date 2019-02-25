# bitcoin-address-soft-regex-validation

[![TypeScript](https://badges.frapsoft.com/typescript/love/typescript.svg?v=101)](https://github.com/ellerbrock/typescript-badges/)
[![Coverage Status](https://coveralls.io/repos/github/NoriSte/bitcoin-address-soft-regex-validation/badge.svg?branch=master)](https://coveralls.io/github/NoriSte/bitcoin-address-soft-regex-validation?branch=master)

Performs a soft (syntactically-only) validation of Bitcoin address (both Base58 and Bech32, both Mainnet and Testnet). It takes for granted that you have a stronger (maybe server side) Checksum validation.

```bash
npm install --save bitcoin-address-soft-regex-validation
```
```javascript
const isValidBitcoinAddress = require("bitcoin-address-soft-regex-validation");
// a mainnet address
isValidBitcoinAddress("1JDknRvZTi5XdhQB3cgvJ9R8aogUvfbYUB"); // true
// a testnet address
isValidBitcoinAddress("tb1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq", false); // true
```

It takes two parameters:

- the address itself
- a boolean (default to `true`) to switch from Mainnet addresses check to Testnet addresses check

Remember that it's not so important if some false positives pass the validation (as said above, it takes for granted that a serious validation is made elsewhere), the only important thing is that no one valid address is blocked.

It's bases on some resources like [this one](http://mokagio.github.io/tech-journal/2014/11/21/regex-bitcoin.html) and [this one](https://stackoverflow.com/a/48643915) and mixed together on [Regex101](https://regex101.com/r/v0g6bv/1).

It has no dependencies and it's a single-function package, check the `index.js` file to copy the code and avoid adding one more dependency if you want.
