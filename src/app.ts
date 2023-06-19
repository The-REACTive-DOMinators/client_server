import express, { Express } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import { dbInit } from './utils/dbInit';
import { productsRoutes } from './routes/products';
import { phonesRoutes } from './routes/phones';
import { hotPricesRoutes } from './routes/hotPrices';
import { newestRoutes } from './routes/newest';
import { tabletsRoutes } from './routes/tablets';
import { accessoriesRoutes } from './routes/accessories';

export const startApp = () => {
  const app: Express = express();

  app.use(bodyParser.json());
  app.use(cors());
  app.use(express.static(path.resolve('public')));
  app.use('/products', productsRoutes);
  app.use('/products/phones', phonesRoutes);
  app.use('/tablets', tabletsRoutes);
  app.use('/accessories', accessoriesRoutes);
  app.use('/newest', newestRoutes);
  app.use('/hot-prices', hotPricesRoutes);

  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });

  dbInit();
};
