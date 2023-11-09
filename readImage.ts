
import fs from 'fs';

// Read the image file
export async function readImage(path: string) {
    let data = await fs.promises.readFile(path, 'base64');
    return data
}