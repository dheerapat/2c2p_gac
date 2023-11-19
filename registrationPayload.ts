import { aesEncrypt } from "./aesEncrypt";
import { readImage } from "./readImage";
 
 
export async function DataRegister() {
    let data = {
        verificationCode: "5afe06d5-c367-4fda-9e48-387fdba15770",
        mobileCountry: "66",
        mobileNo: "",
        email: "",
        citizenId: await aesEncrypt(""),
        laserId: await aesEncrypt(""),
        idCardExpiryDate: "",
        idCardImage: await readImage("id.png"),
        title: null,
        gender: null,
        firstNameEN: null,
        lastNameEN: null,
        firstNameLocal: "ญาดา",
        lastNameLocal: "สิงห์ทอง",
        dateOfBirth: "1997-05-17",
        customerImage: await readImage("self.png"),
        address: {
            address1: "99 หมู่ 18 ตำบลนอกเมือง",
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
            address1: "99 หมู่ 18 ตำบลนอกเมือง",
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
    return data
}