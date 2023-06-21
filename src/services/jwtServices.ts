import jsonwebtoken from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

interface User {
  id: string;
  email: string;
  password: string;
}

function generateAccessToken(user: User) {
  const { id, email } = user;
  const secret = process.env.JWT_ACCESS_SECRET;
  if (!secret) {
    throw new Error('JWT access secret is not defined');
  }
  return jsonwebtoken.sign({ id, email }, secret, { expiresIn: '30m' });
}

function generateRefreshToken(user: User) {
  const { id, email } = user;
  const secret = process.env.JWT_REFRESH_SECRET;
  if (!secret) {
    throw new Error('JWT access secret is not defined');
  }
  return jsonwebtoken.sign({ id, email }, secret, { expiresIn: '30d' });
}

function validateAccessToken(token: string) {
  try {
    const secret = process.env.JWT_ACCESS_SECRET;
    if (!secret) {
      throw new Error('JWT access secret is not defined');
    }
    return jsonwebtoken.verify(token, secret) as User;
  } catch (error) {
    return null;
  }
}

function validateRefreshToken(token: string) {
  try {
    const secret = process.env.JWT_REFRESH_SECRET;
    if (!secret) {
      throw new Error('JWT access secret is not defined');
    }
    return jsonwebtoken.verify(token, secret) as User;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const jwtServices = {
  generateAccessToken,
  validateAccessToken,
  generateRefreshToken,
  validateRefreshToken
};
