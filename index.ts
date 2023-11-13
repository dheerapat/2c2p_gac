import { decryptMessage,encryptObjectWithPGP, sendEncryptedMessageToAPI } from "./payloadEncrypt";
import { DataRegister } from "./registrationPayload";

const publicKeyFilePath = './UAT_GAC_Public.asc';



const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3VzZXJkYXRhIjoiWElYNFUwdi9XbXFmcGpCQWdnb0dmcFRKL0NiSWxXMmpoNXpCb2NUK3RpTi9nWjFTd2UxVEdweHAybU9sbjdMVFVORGRoSTI3THdzNUxGbVZoc3pScmJPZGVHUGxnTG00SmZXQytSRjVySG89IiwibmJmIjoxNjk5ODYwOTA0LCJleHAiOjE2OTk4NjI3MDQsImlhdCI6MTY5OTg2MDkwNCwiaXNzIjoiR2FjLUFwaSIsImF1ZCI6IkdhYy1DbGllbnQifQ.yyTpIFznO-XozilRodo6tFsYLwpnQem5ffzNg9NJRh4';
const apiEndpoint = 'https://sandbox-gac.sandbox.2c2p.net/gac/api/v2.1/customers/register-by-thai-id-card'

async function main(){
  const dataToEncrypt = await DataRegister()
  encryptObjectWithPGP(dataToEncrypt, publicKeyFilePath)
  .then((encryptedData) => {
    let obj = {
      data: encryptedData.slice(29, -27)
    }

    let jsonObj = JSON.stringify(obj)
    // console.log(jsonObj)
    // sendEncryptedMessageToAPI(obj, apiEndpoint, accessToken);
  })
  .catch((error) => {
    console.error(error);
  });
}


// decryptMessage("hQEMAz8cKuOiir56AQgAl+U/ATc/f+4Lenjf/3Oejb24D1P/vc5kM1fi2k55EOTF3UFlVkRKkRuTNrxZ1L953Bblxu7r6UcvBSLYNWFgR9pOv/zSbyGcxKb+cNNgIdg7a8E7zgrGYaKHRwf4vdBrvuffp8E5YX4bnBiZa8u76pV1gogZFG5EFQG8NxppbD9/arsFO8/siDI1SG/zrgHEBoxrCfLhf3fnH+q5KsIHWatNs0fM8Eizjgo9IjQfPDsqY41g/riGZGIWrtY4ORbNi846j99K8FjRQvRkMOzPYQrN4ttCsRMq0jzWWVvGMVmlz0cDN0mXgC7C4TfSZi6TTCcW1uBEgneWuQGhyvJSbdLAmAH8qzHNU0LMn4AYFF8kH31L92CEXGOEwsgkAumsdfJPN5ty1XoKugSHMAnWTIxbv+6K2y2/wZiFs0EmsV/ZhXyDLq/8p/GeJhluA51Kx41fe6UerMSYdG34Bvcl7BOYdUvkZLwjG+HMR+/bQR7pChnjE1nEvJsOH6BT8QmbyBGy4PQJ8GtgmlT2A0grr9Uo89vK2PsTHVNWUfUY1N7YDYGTENmXcxPBNCm+sU68yCgHIMyMSBgtriafAifgbj769SljAgNpnail2M95NcEbjOVdY9b5XWkfV+OD2LshkZB5n/tpEvL0Aj7qgZ3fXM1VTp4sdAm4PYVIprfgFu1/l31/X1jf7p78PqgrsdTu+TVZlwGv0N6u670cbrZLftLv7pX51avlzIG+Qp/Cgg7xUwn6RTlcAFpDa2O3oBjFSKIXPOowQJPm6PM7b1YBIoyPT1ipmPpRy6Oa=o65C",
//   './dheeto_s9_private.asc').then(decrypt => {
//     console.log(JSON.parse(decrypt))
//   }).catch((error) => {
//     console.error(error);
//   });


main();
