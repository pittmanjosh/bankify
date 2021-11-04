import jwt from 'jsonwebtoken';
const privateKey = process.env.REACT_APP_JWT_KEY;
const decryptKey = process.env.REACT_APP_JWT_DECRYPT_KEY;

export function encrypt(x) {
  return jwt.sign(x, privateKey)
}

export function decrypt(token) {
  jwt.verify(token, decryptKey, function(err, decoded) {
    console.log(decoded.foo) // bar
  });
}