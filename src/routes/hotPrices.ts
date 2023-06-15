import { Router } from 'express';
import { hotPricesController } from '../controllers/hotPrices';

export const hotPricesRoutes = Router();

hotPricesRoutes.get('/', hotPricesController.getHotPrices);
