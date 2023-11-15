import { aesEncrypt } from "./aesEncrypt";
import { readImage } from "./readImage";


export async function DataRegister() {
    let data = {
        verificationCode: "4ba900dc-62b6-4788-8a17-88160ea51161",
        mobileCountry: "66",
        mobileNo: "",
        email: "test@2c2p.com",
        citizenId: aesEncrypt(""),
        laserId: aesEncrypt(""),
        idCardExpiryDate: "2026-04-03",
        idCardImage: await readImage("ID.png"),
        title: null,
        gender: null,
        firstNameEN: null,
        lastNameEN: null,
        firstNameLocal: "",
        lastNameLocal: "",
        dateOfBirth: "",
        customerImage: await readImage("self.png"),
        address: {
            address1: "293 หมู่ 18 ตำบลนอกเมือง",
            address2: null,
            countryId: "THA",
            state: null,
            PostalCode: null,
            addressDefine1: null,
            addressDefine2: null,
            stateId: 68,
            districtId: 811,
            district: null,
            subdistrictId: 1945,
            subdistrict: null
        },
        mailingAddress: {
            address1: "293 หมู่ 18 ตำบลนอกเมือง",
            address2: null,
            countryId: "THA",
            state: null,
            PostalCode: null,
            addressDefine1: null,
            addressDefine2: null,
            stateId: 68,
            districtId: 811,
            district: null,
            subdistrictId: 1945,
            subdistrict: null
        },
        occupationId: 21,
        occupation: null,
        workPlace: "Socket9",
        businessTypeId: 1,
        workAddress: {
            address1: "486/152-154 ถนนเพชรบุรี แขวงถนนเพชรบุรี เขตราชเทวี กรุงเทพมหานคร 10400",
            address2: null,
            countryId: "THA",
            state: null,
            PostalCode: null,
            addressDefine1: null,
            addressDefine2: null,
            stateId: 68,
            districtId: 811,
            district: null,
            subdistrictId: 1945,
            subdistrict: null
        },
    userDefined1: null,
        userDefined2: null,
        userDefined3: null,
        userDefined4: null,
        userDefined5: null,
        userDefined6: null,
        userDefined7: null,
        userDefined8: null,
        userDefined9: null,
        userDefined10: null,
        languageCode: "EN",
        walletPurposeId: null,
        walletPurposeText: null,
        consentList: [
            {
                consentId: 365,
                acceptFlag: true,
                userDefined1: null,
                userDefined2: null
            },
            {
                consentId: 366,
                acceptFlag: true,
                userDefined1: null,
                userDefined2: null
            }
        ],
        externalId: null,
        enableManualApproval: false,
        deviceId: "90232d55-be06-493d-8844-9934d578e1de",
        ZolozIDRecogTransId: null,
        ZolozFaceCaptureTransId: null
    };
    const jsonString = JSON.stringify(data);
    console.log(await readImage("self.png"))
    return jsonString
}
