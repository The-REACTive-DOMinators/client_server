'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRoutes = void 0;
const express_1 = require("express");
const products_1 = require("../controllers/products");
exports.productsRoutes = (0, express_1.Router)();
exports.productsRoutes.get('/', products_1.productsController.getAllProducts);
exports.productsRoutes.get('/:id', products_1.productsController.getProductById);
