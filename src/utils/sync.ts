// import { Products } from '../models/Products';
import { dbInit } from './dbInit';
// import phones from '../../public/api/phones.json';
import fs from 'fs';
import path from 'path';
import { Phones } from '../models/Phone';

function readData(folderName: string) {
  const folderPath = path.resolve(folderName);

  const files = fs.readdirSync(folderPath);
  const data: any = [];

  files.forEach((file) => {
    const filePath = path.resolve(folderPath, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const parsedData = JSON.parse(fileContent);

    data.push(parsedData);
  });

  return data;
}

const seedInitialData = async () => {
  // await Products.bulkCreate(phones);
  await Phones.bulkCreate(readData('public/api/phones'));
};

const sync = async () => {
  try {
    dbInit();
    // await Products.sync({ alter: true });
    await Phones.sync({ alter: true });

    await seedInitialData();
  } catch (error) {
    console.log(error);

    return;
  }
};

sync();
