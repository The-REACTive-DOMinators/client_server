"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.phonesRoutes = void 0;
const express_1 = require("express");
const phones_1 = require("../controllers/phones");
exports.phonesRoutes = (0, express_1.Router)();
exports.phonesRoutes.get('/count', phones_1.phonesController.getCountOfPhone);
exports.phonesRoutes.get('/:phoneId', phones_1.phonesController.getPhoneById);
exports.phonesRoutes.get('/:phoneId/recommended', phones_1.phonesController.getRecommended);
