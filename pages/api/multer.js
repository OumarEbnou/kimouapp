import multer from 'multer';
import fs from 'fs';
import crypto from 'crypto';

const upload = multer();

async function handeler(req, res) {
  if (req.method === 'POST') {
    // Process the file from the request body
    upload.single('file')(req, res, (err) => {
      //if (err) {
      //  // Return an error if there was a problem processing the file
      //  return res.status(400).send('Error: Could not process file');
      //}

      // Read the contents of the file into a Buffer
      let fileBuffer = fs.readFileSync(req.body.file);
      let buffer
      if (Buffer.isBuffer(fileBuffer)) {
        buffer=fileBuffer
      } else {
         buffer = Object.values(fileBuffer);
      }
     fileBuffer= Buffer.from(buffer);
      // Generate a random key and IV for the DES algorithm
      const key = Buffer.from(req.body.key, 'hex');
      const iv = Buffer.from(req.body.iv, 'hex');

      // Create a Cipheriv object using the DES algorithm, the key, and the IV
      const cipher = crypto.createCipheriv('des', key, iv);

      // Encrypt the contents of the file
      const encrypted = Buffer.concat([cipher.update(fileBuffer), cipher.final()]);

      // Send the encrypted file back to the client
      res.status(200).send(encrypted);
    });
  }
}

export default handeler;
