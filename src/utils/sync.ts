// import { Product } from '../models/Product';
import { dbInit } from './dbInit';
// import phones from '../../public/api/phones.json';
import fs from 'fs';
import path from 'path';
import { Phone } from '../models/Phone';

function readData(folderName: string, fileName: string) {
  const filePath = path.resolve(folderName, fileName);

  const data = fs.readFileSync(filePath, 'utf8');

  return JSON.parse(data);
}

const seedInitialData = async () => {
  // await Product.bulkCreate(phones);
  await Phone.bulkCreate(readData('api', 'phones.json'));
};

const sync = async () => {
  dbInit();
  // await Product.sync({ alter: true });
  await Phone.sync({ alter: true });

  await seedInitialData();
};

sync();
