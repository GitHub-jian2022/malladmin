const CryptoJS = require("crypto-js");


const key = 'useyourkey'

// Encrypt 加密
function encrypt(text){
  return CryptoJS.AES.encrypt(text, key).toString();
}


// Decrypt 解密
function decrypt(cipherText){
  let bytes = CryptoJS.AES.decrypt(cipherText, key);
  return bytes.toString(CryptoJS.enc.Utf8);
}


module.exports = {
    encrypt,
    decrypt
}