'use strict';

import { Router } from 'express';
import { productsController } from '../controllers/products';

export const productsRoutes = Router();

productsRoutes.get('/', productsController.getAllProducts);
productsRoutes.get('/:id', productsController.getProductById);
