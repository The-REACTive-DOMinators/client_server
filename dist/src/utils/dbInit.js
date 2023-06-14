"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbInit = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const models_1 = require("../models");
const URI = 'postgres://teamonereact:f1OFwSK0zGbW@ep-odd-leaf-749238.eu-central-1.aws.neon.tech/secondOne';
const dbInit = () => {
    try {
        return new sequelize_typescript_1.Sequelize(URI, {
            models: models_1.models,
            dialectOptions: {
                ssl: true
            }
        });
    }
    catch (error) {
        console.log(error);
        return;
    }
};
exports.dbInit = dbInit;
