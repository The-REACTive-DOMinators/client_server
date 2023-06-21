import { NextFunction, Request, Response } from 'express';
import { jwtServices } from '../services/jwtServices';

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.header('Authorization');

  if (!authHeader) {
    res.sendStatus(401);

    return;
  }

  const accessToken = authHeader.split(' ')[1];

  if (!accessToken) {
    res.sendStatus(401);

    return;
  }

  const userData = jwtServices.validateAccessToken(accessToken);

  if (!userData) {
    res.sendStatus(401);

    return;
  }

  next();
}
