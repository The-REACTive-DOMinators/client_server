'use strict';
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
exports.productsController = void 0;
const products_1 = require("../services/products");
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const phones = yield products_1.productsService.getAll(req.query);
    if (!phones) {
        res.sendStatus(404);
        return;
    }
    res.status(200);
    res.json(phones);
});
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const phone = yield products_1.productsService.getById(id);
    if (!phone) {
        res.sendStatus(404);
        return;
    }
    res.status(200);
    res.json(phone);
});
exports.productsController = {
    getAllProducts,
    getProductById
};
