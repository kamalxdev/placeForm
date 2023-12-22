// Purpose: JWT token creation and verification.
import jwt from 'jsonwebtoken';

const SECRET: string=process.env.JWT_SECRET as string;
// const secret="khjlkhjllijgj"

function createJWTtoken(user: any) {
  const token = jwt.sign({user}, SECRET, { expiresIn: '1h' });
  return token;
}

function verifyJWTtoken(token: any) {
  try {
      const decoded = jwt.verify(token, SECRET);
      return decoded;
  } catch (error) {
    console.log("verifyJWTtoken error------>",error);
  }
}

export { createJWTtoken, verifyJWTtoken };