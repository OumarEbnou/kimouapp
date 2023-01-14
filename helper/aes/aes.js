const CryptoJS = require("crypto-js");

class AESCipher {
    constructor() {
        this.key = CryptoJS.enc.Utf8.parse(CryptoJS.lib.WordArray.random(16).toString());
        this.iv = CryptoJS.enc.Utf8.parse(CryptoJS.lib.WordArray.random(16).toString());
    }

    encrypt(plainText) {
        const cipherText = CryptoJS.AES.encrypt(plainText, this.key, { iv: this.iv });
        return cipherText.toString();
    }

    decrypt(cipherText) {
        const bytes = CryptoJS.AES.decrypt(cipherText, this.key, { iv: this.iv });
        return bytes.toString(CryptoJS.enc.Utf8);
    }

    generateKey() {
        this.key = CryptoJS.enc.Utf8.parse(CryptoJS.lib.WordArray.random(16).toString());
        this.iv = CryptoJS.enc.Utf8.parse(CryptoJS.lib.WordArray.random(16).toString());
    }
}

export default AESCipher
