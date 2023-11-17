import * as openpgp from 'openpgp';
import * as fs from 'fs/promises';

export async function importKeyFromFile(filePath: string): Promise<string> {
  try {
    const publicKeyData = await fs.readFile(filePath, 'utf8');
    if (!openpgp.readKey({ armoredKey: publicKeyData })) {
      throw new Error('Invalid PGP public key data');
    }
    return publicKeyData;
  } catch (error) {
    console.error('Error importing public key from file:', error);
    throw error;
  }
}

export async function encodeStringToUtf8Bytes(message: string) {
  const encoder = new TextEncoder();
  return encoder.encode(message);
}

export async function encryptObjectWithPGP(obj: any, publicKeyFilePath: string) {
  try {
    const jsonString = JSON.stringify(obj);
    // console.log(jsonString)
    const utf8Bytes = await encodeStringToUtf8Bytes(jsonString);
    // Import the recipient's public key from a file
    const publicKeyArmored = await importKeyFromFile(publicKeyFilePath);
    const publicKey = await openpgp.readKey({ armoredKey: publicKeyArmored });

    const encryptedData = await openpgp.encrypt({
      message: await openpgp.createMessage({ binary: utf8Bytes }),
      encryptionKeys: publicKey
    });

    return encryptedData;
  } catch (error) {
    console.error('Error encrypting object with PGP:', error);
    throw error;
  }
}

export async function sendEncryptedMessageToAPI(encryptedMessage: any, apiEndpoint: string, token: string): Promise<void> {
  try {
    // Create a JSON object with the encrypted message
    const messageObject = { data: encryptedMessage };

    // Send the JSON object to the API using fetch
    const response = await fetch(apiEndpoint, {
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

    const responseData = await response.json();
    console.log('API Response:', responseData);
  } catch (error) {
    throw error;
  }
}

export async function decryptMessage(encryptedMessage: string, privateKeyFilePath: string): Promise<string> {
  try {
    const msg = `-----BEGIN PGP MESSAGE-----\n\n${encryptedMessage}\n-----END PGP MESSAGE-----`

    // const readableStream = new ReadableStream({
    //   start(controller) {
    //     controller.enqueue(msg);
    //     controller.close();
    //   }
    // });

    // const message = await openpgp.readMessage({armoredMessage: readableStream})

    // TODO: change secret
    const passphrase = '"#P@ssw0rd#"'
    const privateKeyArmored = await importKeyFromFile(privateKeyFilePath);
    const privateKey = await openpgp.decryptKey({
      privateKey: await openpgp.readPrivateKey({ armoredKey: privateKeyArmored }),
      passphrase
    });

    const message = await openpgp.readMessage({
      armoredMessage: msg
    });

    const { data: decrypted } = await openpgp.decrypt({
      message,
      config: {
        allowInsecureDecryptionWithSigningKeys: true,
      },
      decryptionKeys: privateKey
    });

    return decrypted;
  } catch (error) {
    throw error;
  }
}