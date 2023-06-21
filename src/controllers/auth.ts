import { Response, Request } from 'express';
import bcrypt from 'bcrypt';
import { User } from '../models/User';
import { v4 as uuidv4 } from 'uuid';
import { emailServices } from '../services/emailServices';
import { userServices } from '../services/userServices';
import { jwtServices } from '../services/jwtServices';
import { tokenService } from '../services/token';

const activationToken = uuidv4();

async function register(req: Request, res: Response) {
  const { email, password } = req.body;

  const emailError = validateEmail(email);
  const passwordError = validatePassword(password);

  if (emailError || passwordError) {
    res.status(400).json({ emailError, passwordError });

    return;
  }

  const user = await userServices.getByEmail(email);

  if (user) {
    res.status(400).json({ emailError: 'Email is already taken' });

    return;
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await User.create({
    email,
    password: hashedPassword,
    activationToken
  });

  emailServices.sendActivationLink(email, activationToken);

  res.sendStatus(201);
}

async function activateAccount(req: Request, res: Response) {
  const { activationToken } = req.params;

  console.log(activationToken);

  const user = await User.findOne({ where: { activationToken } });

  if (!user) {
    res.sendStatus(404);

    return;
  }

  user.activationToken = null;
  await user.save();

  res.send(user);
}

async function login(req: Request, res: Response) {
  const { email, password } = req.body;

  const emailError = validateEmail(email);
  const passwordError = validatePassword(password);

  if (emailError || passwordError) {
    res.status(400).json({ emailError, passwordError });

    return;
  }

  const user = await userServices.getByEmail(email);

  if (!user) {
    res.status(400).json({ emailError: 'Email is not registered' });

    return;
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    res.status(400).json({ passwordError: 'Password is incorrect' });

    return;
  }

  await sendAuthentication(res, user);
}

async function logout(req: Request, res: Response) {
  const refreshToken = req?.header('Cookie') as string;
  console.log(refreshToken);
  const userData = jwtServices.validateRefreshToken(refreshToken.split('=')[1]);

  res.clearCookie('refreshToken');

  if (userData) {
    await tokenService.remove(userData.id);
  }

  res.sendStatus(204);
}

async function refresh(req: Request, res: Response) {
  const refreshToken = req?.header('Cookie') as string;
  const userData = jwtServices.validateRefreshToken(refreshToken.split('=')[1]);

  if (!userData) {
    res.sendStatus(401);

    return;
  }

  const token = await tokenService.getByToken(refreshToken);

  if (!token) {
    res.sendStatus(401);

    return;
  }

  const user = await userServices.getByEmail(userData.email);

  if (!user) {
    res.sendStatus(401);

    return;
  }

  await sendAuthentication(res, user);
}

async function sendAuthentication(res: Response, user: User) {
  const userData = userServices.normalize(user);
  const accessToken = jwtServices.generateAccessToken(user);
  const refreshToken = jwtServices.generateRefreshToken(user);

  await tokenService.save(user.id, refreshToken);

  res.cookie('refreshToken', refreshToken, {
    maxAge: 30 * 24 * 60 * 60 * 1000,
    httpOnly: true
  });

  res.json({ accessToken, user: userData });
}

function validateEmail(value: string) {
  if (!value) {
    return 'Email is required';
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(value)) {
    return 'Email is invalid';
  }

  return '';
}

function validatePassword(value: string) {
  if (!value) {
    return 'Password is required';
  }

  if (value.length < 8) {
    return 'Password must be at least 8 characters long';
  }

  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  if (!passwordPattern.test(value)) {
    return 'Password must contain at least one uppercase letter, one lowercase letter and one number';
  }

  return '';
}

export const authController = {
  register,
  activateAccount,
  login,
  refresh,
  logout
};
