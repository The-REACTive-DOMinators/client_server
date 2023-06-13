"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const URI = 'postgres://teamonereact:f1OFwSK0zGbW@ep-odd-leaf-749238.eu-central-1.aws.neon.tech/neondb';
const database = new sequelize_1.Sequelize(URI, {
    dialectOptions: {
        ssl: true
    }
});
exports.default = database;
