"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbInit = void 0;
const sequelize_1 = require("sequelize");
const URI = 'postgres://teamonereact:f1OFwSK0zGbW@ep-odd-leaf-749238.eu-central-1.aws.neon.tech/neondb';
const dbInit = () => {
    try {
        return new sequelize_1.Sequelize(URI, {
            dialectOptions: {
                ssl: true
            }
        });
    }
    catch (error) {
        throw new Error(error);
    }
};
exports.dbInit = dbInit;
