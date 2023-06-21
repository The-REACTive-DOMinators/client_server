import express from 'express';
import { authController } from '../controllers/auth';
import { catchError } from '../utils/catchError';

export const authRoutes = express.Router();

authRoutes.post('/', catchError(authController.login));
authRoutes.post('/registration', catchError(authController.register));
authRoutes.get(
  '/activation/:activationToken',
  catchError(authController.activateAccount)
);
authRoutes.post('/logout', catchError(authController.logout));
authRoutes.get('/refresh', catchError(authController.refresh));
