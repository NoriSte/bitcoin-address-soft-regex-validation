# bitcoin-address-soft-regex-validation

[![Build Status](https://travis-ci.com/NoriSte/bitcoin-address-soft-regex-validation.svg?branch=master)](https://travis-ci.com/NoriSte/bitcoin-address-soft-regex-validation)
[![Build Cron](https://img.shields.io/badge/build%20cron-weekly-44cc11.svg)](https://travis-ci.com/NoriSte/bitcoin-address-soft-regex-validation)
[![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com/)
[![Coverage Status](https://coveralls.io/repos/github/NoriSte/bitcoin-address-soft-regex-validation/badge.svg?branch=master)](https://coveralls.io/github/NoriSte/bitcoin-address-soft-regex-validation?branch=master)
[![Mutation testing badge](https://badge.stryker-mutator.io/github.com/NoriSte/bitcoin-address-soft-regex-validation/master)](https://stryker-mutator.github.io)
[![TypeScript](https://badges.frapsoft.com/typescript/love/typescript.svg?v=101)](https://github.com/ellerbrock/typescript-badges/)

Performs a soft (syntactically-only) validation of Bitcoin address (both Base58 and Bech32, both Mainnet and Testnet). It takes for granted that you have a stronger (maybe server side) Checksum validation.

```bash
npm install --save bitcoin-address-soft-regex-validation
```
```javascript
const {isValidBitcoinAddress} = require("bitcoin-address-soft-regex-validation");
// a mainnet address
isValidBitcoinAddress("1JDknRvZTi5XdhQB3cgvJ9R8aogUvfbYUB"); // "mainnet"
// a testnet address
isValidBitcoinAddress("tb1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq"); // "testnet"
// an invalid address
isValidBitcoinAddress("fake-address"); // undefined
```

Remember that it's not so important if some false positives pass the validation (as said above, it takes for granted that a serious validation is made elsewhere), the only important thing is that no one valid address is blocked.

It's bases on some resources like [this one](http://mokagio.github.io/tech-journal/2014/11/21/regex-bitcoin.html), [this one](https://stackoverflow.com/a/48643915) and mixed together on [Regex101](https://regex101.com/r/v0g6bv/1).

It has no dependencies and it's a single-function package, check the `index.js` file to copy the code and avoid adding one more dependency if you want.

Last but not least: it's written in TypeScript.

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="https://twitter.com/NoriSte"><img src="https://avatars0.githubusercontent.com/u/173663?v=4" width="100px;" alt="Stefano Magni"/><br /><sub><b>Stefano Magni</b></sub></a><br /><a href="https://github.com/NoriSte/bitcoin-address-soft-regex-validation/commits?author=NoriSte" title="Code">💻</a> <a href="https://github.com/NoriSte/bitcoin-address-soft-regex-validation/commits?author=NoriSte" title="Tests">⚠️</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
