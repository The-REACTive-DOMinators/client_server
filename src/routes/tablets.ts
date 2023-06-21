import { Router } from 'express';
import { tabletsController } from '../controllers/tablets';

export const tabletsRoutes = Router();

tabletsRoutes.get('/', tabletsController.getAllTablets);
