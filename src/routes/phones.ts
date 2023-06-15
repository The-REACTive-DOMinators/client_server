import { Router } from 'express';
import { phonesController } from '../controllers/phones';

export const phonesRoutes = Router();

phonesRoutes.get('/:phoneId', phonesController.getPhoneById);
phonesRoutes.get('/:phoneId/recommended', phonesController.getRecommended);
