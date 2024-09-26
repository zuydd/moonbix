// const CryptoJS = require("crypto-js");
import CryptoJS from "crypto-js";
import FingerprintJS2 from "fingerprintjs2";

function encryptData(data, secretKey) {
  // Tạo một chuỗi ngẫu nhiên 12 byte và mã hóa nó thành chuỗi Base64 (IV)
  // const iv = CryptoJS.lib.WordArray.random(12).toString(CryptoJS.enc.Base64);
  const iv = "gmsP91Sy3pMi2bSp";

  // Mã hóa dữ liệu với khóa bí mật và IV (Initialization Vector)
  const encrypted = CryptoJS.AES.encrypt(
    data,
    CryptoJS.enc.Utf8.parse(secretKey),
    {
      iv: CryptoJS.enc.Utf8.parse(iv),
    }
  );

  // Kết hợp IV và dữ liệu đã mã hóa, chuyển đổi thành chuỗi Base64
  const abc = encrypted.ciphertext.toString(CryptoJS.enc.Base64);
  console.log(abc);

  return iv + abc;
}

function generateFingerprint(data) {
  // Bước 1: Sắp xếp các thuộc tính theo thứ tự bảng chữ cái
  const sortedKeys = Object.keys(data).sort();

  // Bước 2: Tạo chuỗi từ tất cả các giá trị
  const combinedString = sortedKeys.map((key) => data[key]).join("");

  // Bước 3: Tạo fingerprint bằng x64hash128
  const fingerprint = FingerprintJS2.x64hash128(combinedString, 32);

  return fingerprint;
}

const data = "1726645536830|373.922|245.138|-0.324|402.223|329.519|1|70|42";
const key = "2b734d595331a5aeae8a578538cc9bed";
encryptData(data, key);

// Ví dụ dữ liệu cần thiết
const deviceData = {
  screen_resolution: "844,390",
  available_screen_resolution: "844,390",
  system_version: "iOS 17.0",
  brand_model: "mobile Apple iPhone ",
  system_lang: "vi-VN",
  timezone: "GMT+07:00",
  timezoneOffset: -420,
  user_agent:
    "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
  list_plugin:
    "PDF Viewer,Chrome PDF Viewer,Chromium PDF Viewer,Microsoft Edge PDF Viewer,WebKit built-in PDF",
  canvas_code: "aa5e80db",
  webgl_vendor: "Apple Inc.",
  webgl_renderer: "Apple GPU",
  audio: "124.04345259929687",
  platform: "iPhone",
  web_timezone: "Asia/Saigon",
  device_name: "WebKit V605.1.15 (iOS)",
  device_id: "",
  related_device_ids: "",
};

// Tạo fingerprint
const fingerprint = generateFingerprint(deviceData);
console.log(fingerprint);
