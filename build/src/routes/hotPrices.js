"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hotPricesRoutes = void 0;
const express_1 = require("express");
const hotPrices_1 = require("../controllers/hotPrices");
exports.hotPricesRoutes = (0, express_1.Router)();
exports.hotPricesRoutes.get('/', hotPrices_1.hotPricesController.getHotPrices);
