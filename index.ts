import { decryptMessage } from "./payloadEncrypt";

const publicKeyFilePath = './UAT_GAC_Public.asc';

const dataToEncrypt = {
  email: "test@socket9.com",
  deviceId: "000-111-222-333"
}

const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3VzZXJkYXRhIjoiWElYNFUwdi9XbXFmcGpCQWdnb0dmcWRhU0k2ZGYxSXZSZEV6QlhZblhDL1JkNHJBMnZaRlRPWHl0Vk5YRHNpdExyeVdHeWR6TnV5N3J2cGVIb3dyS1lVbURmQjRkU2NXYTZDOEZNbUhPK2M9IiwibmJmIjoxNjk5MzI1NjU4LCJleHAiOjE2OTkzMjc0NTgsImlhdCI6MTY5OTMyNTY1OCwiaXNzIjoiR2FjLUFwaSIsImF1ZCI6IkdhYy1DbGllbnQifQ.8rf-Bk2UnaVHz-XQRuWTdgY0u1pgDQyDz7HDjGWas8M';
const apiEndpoint = 'https://sandbox-gac.sandbox.2c2p.net/gac/api/v2.1/customers/verify-user-login-by-email'

// encryptObjectWithPGP(dataToEncrypt, publicKeyFilePath)
//   .then((encryptedData) => {
//     console.log(encryptedData)
//     let obj = {
//       data: encryptedData.slice(29, -27)
//     }

//     let jsonObj = JSON.stringify(obj)

//     console.log(jsonObj);

//     sendEncryptedMessageToAPI(encryptedData, apiEndpoint, accessToken);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

decryptMessage("hQEMAz8cKuOiir56AQgAl+U/ATc/f+4Lenjf/3Oejb24D1P/vc5kM1fi2k55EOTF3UFlVkRKkRuTNrxZ1L953Bblxu7r6UcvBSLYNWFgR9pOv/zSbyGcxKb+cNNgIdg7a8E7zgrGYaKHRwf4vdBrvuffp8E5YX4bnBiZa8u76pV1gogZFG5EFQG8NxppbD9/arsFO8/siDI1SG/zrgHEBoxrCfLhf3fnH+q5KsIHWatNs0fM8Eizjgo9IjQfPDsqY41g/riGZGIWrtY4ORbNi846j99K8FjRQvRkMOzPYQrN4ttCsRMq0jzWWVvGMVmlz0cDN0mXgC7C4TfSZi6TTCcW1uBEgneWuQGhyvJSbdLAmAH8qzHNU0LMn4AYFF8kH31L92CEXGOEwsgkAumsdfJPN5ty1XoKugSHMAnWTIxbv+6K2y2/wZiFs0EmsV/ZhXyDLq/8p/GeJhluA51Kx41fe6UerMSYdG34Bvcl7BOYdUvkZLwjG+HMR+/bQR7pChnjE1nEvJsOH6BT8QmbyBGy4PQJ8GtgmlT2A0grr9Uo89vK2PsTHVNWUfUY1N7YDYGTENmXcxPBNCm+sU68yCgHIMyMSBgtriafAifgbj769SljAgNpnail2M95NcEbjOVdY9b5XWkfV+OD2LshkZB5n/tpEvL0Aj7qgZ3fXM1VTp4sdAm4PYVIprfgFu1/l31/X1jf7p78PqgrsdTu+TVZlwGv0N6u670cbrZLftLv7pX51avlzIG+Qp/Cgg7xUwn6RTlcAFpDa2O3oBjFSKIXPOowQJPm6PM7b1YBIoyPT1ipmPpRy6Oa=o65C",
  './dheeto_s9_private.asc').then(decrypt => {
    console.log(JSON.parse(decrypt))
  }).catch((error) => {
    console.error(error);
  });