const {isValidBitcoinAddress, mainnetRegex, testnetRegex, mainnet, testnet} = require("./index");

describe("Bitcoin address soft regex validation tests", () => {
  describe("Exports", () => {
    test("The isValidBitcoinAddress should be exported", () => {
      expect(isValidBitcoinAddress).toBeDefined();
    });
    test("The mainnetRegex should be exported", () => {
      expect(mainnetRegex).toBeDefined();
    });
    test("The testnetRegex should be exported", () => {
      expect(testnetRegex).toBeDefined();
    });
    test("The mainnet should be exported", () => {
      expect(mainnet).toBeDefined();
    });
    test("The testnet should be exported", () => {
      expect(testnet).toBeDefined();
    });
  });
  describe("Valid addresses", () => {
    test.each([
      ["Base58", "1JDknRvZTi5XdhQB3cgvJ9R8aogUvfbYUB", "mainnet"],
      ["Bech32", "bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq", "mainnet"],
      ["Base58", "2NCLmdnrxQErmJJPmGaSaE7NxuYKMNnYcxW", "testnet"],
      ["Bech32", "bcrt1q6rhpng9evdsfnn833a4f4vej0asu6dk5srld6x", "testnet"],
      ["Bech32", "tb1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq", "testnet"],
    ])(
      'The %s %s %s address should be considered valid',
      (encoding, address, network) => {
        expect(isValidBitcoinAddress(address)).toBe(network);
      },
    );
  });
  describe("False positives", () => {
    test.each([
      // checksum invalid address found here https://github.com/bitpay/bitcore/issues/402
      ["1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNb", "mainnet"],
    ])(
      'The %s %s address should be considered valid even if it isn\'t',
      (address, network) => {
        expect(isValidBitcoinAddress(address)).toBe(network);
      },
    );
  });
  describe("True negatives", () => {
    test.each([
      // checksum invalid address found here https://github.com/bitpay/bitcore/issues/402
      ["6JDknRvZTi5XdhQB3cgvJ9R8aogUvfbYUB"],
      ["bc2qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq"],
      ["4NCLmdnrxQErmJJPmGaSaE7NxuYKMNnYcxW"],
      ["bcrd1q6rhpng9evdsfnn833a4f4vej0asu6dk5srld6x"],
      ["tb2qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq"],
      ["tb1qarOsrrr7xfkvy5l643lydnw9re59gtzzwf5mdq"],
      ["tb1qarIsrrr7xfkvy5l643lydnw9re59gtzzwf5mdq"],
      ["email@google.com"],
      [""],
    ])(
      'The %s address shouldn\'t be considered valid',
      (address,) => {
        expect(isValidBitcoinAddress(address)).toBeUndefined();
      },
    );
  });
});
