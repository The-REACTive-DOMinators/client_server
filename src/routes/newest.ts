import { Router } from 'express';
import { newestController } from '../controllers/newest';

export const newestRoutes = Router();

newestRoutes.get('/', newestController.getNewest);
