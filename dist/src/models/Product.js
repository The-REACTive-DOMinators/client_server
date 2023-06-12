"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const sequelize_1 = require("sequelize");
const dbInit_1 = require("../utils/dbInit");
const db = (0, dbInit_1.dbInit)();
exports.Product = db.define('products', {
    category: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    phoneId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    itemId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    fullPrice: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    price: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    screen: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    capacity: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    color: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    ram: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    year: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    image: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    updatedAt: false,
    createdAt: false
});
