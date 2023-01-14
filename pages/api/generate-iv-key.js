import crypto from 'crypto';

export default function generateIVandKey(req, res) {
  // Generate a random 8-byte IV and key
  const iv = crypto.randomBytes(8);
  const key = crypto.randomBytes(8);

  // Send the IV and key back to the client as a hexadecimal string
  res.status(200).send({
    iv: iv.toString('hex'),
    key: key.toString('hex'),
  });
}
