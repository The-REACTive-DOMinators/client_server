import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { dbInit } from './utils/dbInit';

const app: Express = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

dbInit();

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello World!' });
});
