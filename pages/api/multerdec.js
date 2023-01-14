import multer from 'multer';
import fs from 'fs';
import crypto from 'crypto';

const upload = multer();
async function decryptFile(key, iv, encryptedBuffer) {
  // Create a Decipheriv object using the DES algorithm, the key, and the IV


  return decrypted;
}
async function handeler(req, res) {
  if (req.method === 'POST') {
    // Process the file from the request body
    upload.single('file')(req, res, (err) => {
      if (err) {
        // Return an error if there was a problem processing the file
        return res.status(400).send('Error: Could not process file');
      }

      // Read the contents of the file into a Buffer
      const encryptedBuffer = fs.readFileSync(req.file.path);

      // Convert the key and IV from hex strings to Buffer objects
      const key = Buffer.from(req.body.key, 'hex');
      const iv = Buffer.from(req.body.iv, 'hex');

      const decipher = crypto.createDecipheriv('des', key, iv);
      // Decrypt the contents of the file
      const decryptedBuffer = Buffer.concat([decipher.update(encryptedBuffer), decipher.final()]);
      // Send the decrypted file back to the client
      res.status(200).send(decryptedBuffer);
    });
  }
}

export default handeler;

