import express, { Express } from 'express';
import cors from 'cors';
import path from 'path';
import { dbInit } from './utils/dbInit';
import { productsRoutes } from './routes/products';
import { phonesRoutes } from './routes/phones';
import { hotPricesRoutes } from './routes/hotPrices';
import { newestRoutes } from './routes/newest';
import { authRoutes } from './routes/auth';
import { userRoutes } from './routes/user';

export const startApp = () => {
  const app: Express = express();

  app.use(express.json());
  app.use(
    cors({
      origin: 'https://the-reactive-dominators.github.io/react_catalog/',
      credentials: true
    })
  );
  app.use(express.static(path.resolve('public')));
  app.use('/products', productsRoutes);
  app.use('/products/phones', phonesRoutes);
  app.use('/newest', newestRoutes);
  app.use('/hot-prices', hotPricesRoutes);
  app.use('/login', authRoutes);
  app.use('/users', userRoutes);

  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });

  dbInit();
};
