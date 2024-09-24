class CryptoHelper {
  constructor() {}

  encodeToBase64(input) {
    return Buffer.from(input).toString("base64");
  }
  decodeFromBase64(encoded) {
    return Buffer.from(encoded, "base64").toString("utf-8");
  }
}

const cryptoHelper = new CryptoHelper();
export default cryptoHelper;
