import { Product } from '../models/Product';
import { dbInit } from './dbInit';
import phones from '../../public/api/phones.json';

const seedInitialData = async () => {
  await Product.bulkCreate(phones);
};

const sync = async () => {
  dbInit();
  await Product.sync({ alter: true });

  await seedInitialData();
};

sync();
