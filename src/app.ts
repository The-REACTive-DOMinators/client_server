import express, { Express } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import { dbInit } from './utils/dbInit';
import { productsRoutes } from './routes/products';
import { phonesRoutes } from './routes/phones';
import { newestRoutes } from './routes/newest';

export const startApp = () => {
  const app: Express = express();

  app.use(bodyParser.json());
  app.use(cors());
  app.use(express.static(path.resolve('public')));
  app.use('/products', productsRoutes);
  app.use('/phones', phonesRoutes);
  app.use('/', newestRoutes);

  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });

  dbInit();
};
