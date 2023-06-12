import { Sequelize } from 'sequelize';

const URI =
  'postgres://teamonereact:f1OFwSK0zGbW@ep-odd-leaf-749238.eu-central-1.aws.neon.tech/neondb';

export const dbInit = () => {
  try {
    return new Sequelize(URI, {
      dialectOptions: {
        ssl: true
      }
    });

  } catch {
    throw new Error();
  }
};
