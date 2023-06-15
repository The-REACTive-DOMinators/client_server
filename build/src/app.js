"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startApp = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const dbInit_1 = require("./utils/dbInit");
const products_1 = require("./routes/products");
const phones_1 = require("./routes/phones");
const hotPrices_1 = require("./routes/hotPrices");
const newest_1 = require("./routes/newest");
const startApp = () => {
    const app = (0, express_1.default)();
    app.use(body_parser_1.default.json());
    app.use((0, cors_1.default)());
    app.use(express_1.default.static(path_1.default.resolve('public')));
    app.use('/products', products_1.productsRoutes);
    app.use('/products/phones', phones_1.phonesRoutes);
    app.use('/newest', newest_1.newestRoutes);
    app.use('/hot-prices', hotPrices_1.hotPricesRoutes);
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
    (0, dbInit_1.dbInit)();
};
exports.startApp = startApp;
