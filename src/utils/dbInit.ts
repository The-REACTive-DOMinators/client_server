import { Sequelize } from 'sequelize-typescript';
import { models } from '../models';
import dotenv from 'dotenv';
dotenv.config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;

const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?options=project%3D${ENDPOINT_ID}`;

export const dbInit = () => {
  try {
    return new Sequelize(URL, {
      models,
      dialectOptions: {
        ssl: true
      }
    });
  } catch (error) {
    console.log(error);

    return;
  }
};
