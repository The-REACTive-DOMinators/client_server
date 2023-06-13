import express, { Express } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { dbInit } from './utils/dbInit';
import { productsRoutes } from './routes/products';

export const startApp = () => {
  const app: Express = express();

  app.use(bodyParser.json());
  app.use(cors());
  app.use(express.static('dist/public'));
  app.use('/phones', productsRoutes);

  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });

  dbInit();
};
