import CryptoJS from "crypto-js";

class CryptoHelper {
  constructor() {}

  encodeToBase64(input) {
    return Buffer.from(input).toString("base64");
  }

  decodeFromBase64(encoded) {
    return Buffer.from(encoded, "base64").toString("utf-8");
  }

  encryptPayload(data, secretKey) {
    // Tạo một chuỗi ngẫu nhiên 12 byte và mã hóa nó thành chuỗi Base64 (IV)
    const iv = CryptoJS.lib.WordArray.random(12).toString(CryptoJS.enc.Base64);

    // Mã hóa dữ liệu với khóa bí mật và IV (Initialization Vector)
    const encrypted = CryptoJS.AES.encrypt(
      data,
      CryptoJS.enc.Utf8.parse(secretKey),
      {
        iv: CryptoJS.enc.Utf8.parse(iv),
      }
    );

    // Kết hợp IV và dữ liệu đã mã hóa, chuyển đổi thành chuỗi Base64
    const payloadEncode = encrypted.ciphertext.toString(CryptoJS.enc.Base64);
    return iv + payloadEncode;
  }
}

const cryptoHelper = new CryptoHelper();
export default cryptoHelper;
