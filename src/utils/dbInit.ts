import { Sequelize } from 'sequelize-typescript';
import { models } from '../models';

const URI =
  'postgres://teamonereact:f1OFwSK0zGbW@ep-odd-leaf-749238.eu-central-1.aws.neon.tech/auth';

export const dbInit = () => {
  try {
    return new Sequelize(URI, {
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
