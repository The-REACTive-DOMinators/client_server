import { Sequelize } from 'sequelize';

const URI =
  'postgres://teamonereact:f1OFwSK0zGbW@ep-odd-leaf-749238.eu-central-1.aws.neon.tech/neondb';

const database = new Sequelize(URI, {
  dialectOptions: {
    ssl: true
  }
});

export default database;
