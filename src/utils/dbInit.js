"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbInit = void 0;
var sequelize_1 = require("sequelize");
var URI = 'postgres://teamonereact:f1OFwSK0zGbW@ep-odd-leaf-749238.eu-central-1.aws.neon.tech/neondb';
var dbInit = function () {
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
