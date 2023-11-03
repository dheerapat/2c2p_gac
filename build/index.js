"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const openpgp = __importStar(require("openpgp"));
const fs = __importStar(require("fs/promises"));
function importPublicKeyFromFile(filePath) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const publicKeyData = yield fs.readFile(filePath, 'utf8');
            if (!openpgp.readKey({ armoredKey: publicKeyData })) {
                throw new Error('Invalid PGP public key data');
            }
            return publicKeyData;
        }
        catch (error) {
            console.error('Error importing public key from file:', error);
            throw error;
        }
    });
}
function encryptObjectWithPGP(obj, publicKeyFilePath) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const jsonString = JSON.stringify(obj);
            console.log(jsonString);
            // Import the recipient's public key from a file
            const publicKeyArmored = yield importPublicKeyFromFile(publicKeyFilePath);
            const publicKey = yield openpgp.readKey({ armoredKey: publicKeyArmored });
            const encryptedData = yield openpgp.encrypt({
                message: yield openpgp.createMessage({ text: jsonString }),
                encryptionKeys: publicKey
            });
            return encryptedData;
        }
        catch (error) {
            console.error('Error encrypting object with PGP:', error);
            throw error;
        }
    });
}
function sendEncryptedMessageToAPI(encryptedMessage, apiEndpoint, token) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Create a JSON object with the encrypted message
            const messageObject = { data: encryptedMessage };
            // Send the JSON object to the API using fetch
            const response = yield fetch(apiEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(messageObject),
            });
            if (!response.ok) {
                throw new Error(`API request failed with status: ${response.status}`);
            }
            const responseData = yield response.json();
            console.log('API Response:', responseData);
        }
        catch (error) {
            throw error;
        }
    });
}
// usage:
const publicKeyFilePath = './UAT_GAC_Public.asc';
const dataToEncrypt = {
    email: "test@socket9.com",
    deviceId: "000-111-222-333"
};
const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3VzZXJkYXRhIjoiWElYNFUwdi9XbXFmcGpCQWdnb0dmbGJBMmRqVnREdXlrSTR6SjFUT2ZkTzB2RFdnOUNZT01ZK0dzY2pCMmNFT3hiVTcxR01lVE14V0ZpRW5Uc0dObzVEMzhOWEdSak4rWjduRmhxdGsxZ1E9IiwibmJmIjoxNjk4OTE2ODU4LCJleHAiOjE2OTg5MTg2NTgsImlhdCI6MTY5ODkxNjg1OCwiaXNzIjoiR2FjLUFwaSIsImF1ZCI6IkdhYy1DbGllbnQifQ.jzqM-g1VzrlKAoZIvIKVCDZe6SZCmoA-KHT1uQw2Oic';
const apiEndpoint = 'https://sandbox-gac.sandbox.2c2p.net/gac/api/v2.1/customers/verify-user-login-by-email';
encryptObjectWithPGP(dataToEncrypt, publicKeyFilePath)
    .then((encryptedData) => {
    // sendEncryptedMessageToAPI(encryptedData, apiEndpoint, accessToken);
    let obj = {
        data: encryptedData.slice(29, -27)
    };
    let jsonObj = JSON.stringify(obj);
    console.log(jsonObj);
})
    .catch((error) => {
    console.error(error);
});
