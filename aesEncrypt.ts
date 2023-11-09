import cryptoJS from "crypto-js";

const secret = "65MeaID67UmBlZ/Nb8RCOfUAF3gkoproJra9L+J9fmM="
const customIV: cryptoJS.lib.WordArray = cryptoJS.enc.Utf8.parse("Iye16+LR+plUr/qJQaGrkw==")

function aesEncrypt(message: string) {
    let ciphertext = cryptoJS.AES.encrypt(message, secret, { iv: customIV });
    return ciphertext.toString();
}

console.log(aesEncrypt("1319900459658"));