import crypto from 'crypto';

async function  handeler(req, res){
  if (req.method ==='POST') {
    let image

    const key = Buffer.from(req.body.key, 'hex');
    const iv = Buffer.from(req.body.iv, 'hex');

    if (Buffer.isBuffer(image)) {
        image=req.body.image;
    } else {
      image = Object.values(req.body.image);
    }
    const buffer = Buffer.from(image);

    const type = req.body.type;
    if (type === 'encrypt') {
      // Encrypt the image
      const cipher = crypto.createCipheriv('des', key, iv);
      const encrypted = Buffer.concat([cipher.update(buffer), cipher.final()]);
      // Send the encrypted image back to the client
      res.status(200).send(encrypted);
    } else if (type === 'decrypt') {
    // Decrypt the image

    const decipher = crypto.createDecipheriv('des', key, iv);

    const decrypted = Buffer.concat([decipher.update(buffer), decipher.final()]);

    // Send the decrypted image back to the client
    res.status(200).send(decrypted);
    } else {
      // Return an error if the type is not specified
      res.status(400).send('Error: type parameter is required');
    }
  }
  // Read the image file and the key and IV from the request body


  // Check if the request is for encryption or decryption

}
export default handeler