import express, { Express } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { dbInit } from './utils/dbInit';
import { productsRoutes } from './routes/products';

export const startApp = async () => {
  const app: Express = express();

  app.use(bodyParser.json());
  app.use(cors());

  app.use('/phones', productsRoutes);

  dbInit();
};
