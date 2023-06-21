import { Router } from 'express';
import { accessoriesController } from '../controllers/accessories';

export const accessoriesRoutes = Router();

accessoriesRoutes.get('/accessories', accessoriesController.getAllAccessories);
