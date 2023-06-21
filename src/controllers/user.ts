import { jwtServices } from '../services/jwtServices';
import { userServices } from '../services/userServices';
import { Request, Response } from 'express';

async function getAll(req: Request, res: Response) {
  const users = await userServices.getAllActiveUsers();

  res.json(users.map(userServices.normalize));
}

async function getUser(req: Request, res: Response) {
  const refreshToken = req?.header('Cookie') as string;

  if (!refreshToken) {
    res.sendStatus(401);
    return;
  }

  const userData = jwtServices.validateRefreshToken(refreshToken.split('=')[1]);

  if (!userData) {
    res.sendStatus(401);
    return;
  }

  const user = await userServices.getByEmail(userData.email);

  if (!user) {
    res.sendStatus(401);
    return;
  }

  res.json(user);
}

export const userController = {
  getAll,
  getUser
};
