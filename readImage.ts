
import fs from 'fs';

const imagePath = 'dheeto.jpg';

// Read the image file
async function readImage(path: string) {
    let data = await fs.promises.readFile(path, 'base64');
    return data
}

readImage(imagePath).then(data => {
    console.log(data)
}).catch(e => {
    console.error(e)
})