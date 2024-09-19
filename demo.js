// const CryptoJS = require("crypto-js");
import CryptoJS from "crypto-js";

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

  const hook = {
    width: 204,
    height: 185,
  };

  //   {
  //     "timestamp": 1726676775794,
  //     "hookX": 225.9527832503479,
  //     "hookY": 250.10336879164674,
  //     "angle": 0.087627232627014,
  //     "type": 0,
  //     "size": 30,
  //     "itemX": 215.53848227383514,
  //     "itemY": 368.64678841150834,
  //     "level": 113
  // },

  //   233.06943828961235
  //   157.82660474470566

  // 237.59394216099147
  // 157.9873468043548

  229.76049135557497;
  157.34380315971927;

  // x
  // :
  // 268.0752688172043
  // y
  // :
  // 138.36158934959872

  221.68378692279015;
  157.61695552109538;

  x: 194.79235836351006;
  y: 246.84437446952796;

  //   {
  //     "timestamp": 1726677329812,
  //     "hookX": 214.91246245552415,
  //     "hookY": 248.8492647415057,
  //     "angle": 0.17896334100935612,
  //     "type": 1,
  //     "size": 70,
  //     "itemX": 204.40989800247334,
  //     "itemY": 306.90696138811313,
  //     "level": 2
  // }

  //   239.46249087523972
  //   157.89044950371607

  // 323.5593372644733|153.02997836927412
  // 358.15934260647657|153.00178477321478
  // 340.44639649856776|157.99788054268427

  x: 236.62962962962965;
  y: 138;

  const radians = 0.17896334100935612;
  const degrees = radians * (180 / Math.PI);

  const i =
    233.06943828961235 - (Math.sin(degrees * (Math.PI / 180)) * hook.width) / 2;
  const j =
    157.82660474470566 +
    (Math.cos(degrees * (Math.PI / 180)) * hook.height) / 2;

  console.log(i);
  console.log(j);

  return iv + abc;
}

const data = "1726645536830|373.922|245.138|-0.324|402.223|329.519|1|70|42";
const key = "2b734d595331a5aeae8a578538cc9bed";
encryptData(data, key);
