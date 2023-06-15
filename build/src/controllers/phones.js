"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.phonesController = void 0;
const phones_1 = require("../services/phones");
const sequelize_1 = require("sequelize");
const products_1 = require("../services/products");
const getRecommended = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = {
        sortBy: sequelize_1.Sequelize.literal('random()'),
        amount: 16,
        sortType: 'ASC'
    };
    const phones = yield products_1.productsService.getAll(query);
    if (!phones) {
        res.sendStatus(404);
        return;
    }
    res.status(200);
    res.json(phones);
});
const getPhoneById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { phoneId } = req.params;
    const phone = yield phones_1.phonesService.getById(phoneId);
    if (!phone) {
        res.sendStatus(404);
        return;
    }
    res.status(200);
    res.json(phone);
});
const getCountOfPhone = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const phone = yield phones_1.phonesService.getCount();
    if (!phone) {
        res.sendStatus(404);
        return;
    }
    res.status(200);
    res.json(phone);
});
exports.phonesController = {
    getRecommended,
    getPhoneById,
    getCountOfPhone
};
