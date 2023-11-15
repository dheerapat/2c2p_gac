
import fs from 'fs';

// Read the image file
export async function readImage(path: string) {
    await fs.promises.access(path, fs.constants.F_OK);
    let data = await fs.promises.readFile(path, 'base64');
    return data
}