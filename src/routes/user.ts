import express from 'express';
import { userController } from '../controllers/user';
import { authMiddleware } from '../middlewares/authMiddleware';
import { catchError } from '../utils/catchError';

export const userRoutes = express.Router();

userRoutes.get('/', authMiddleware, catchError(userController.getAll));
userRoutes.get('/info', authMiddleware, catchError(userController.getUser));
