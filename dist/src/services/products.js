'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsService = void 0;
const filterByQuery_1 = require("../utils/filterByQuery");
const Product_1 = require("../models/Product");
function getAll(queries) {
    const whereCondition = (0, filterByQuery_1.filterByQuery)(queries);
    return Product_1.Product.findAll({
        where: {
            category: 'phones'
        },
        limit: whereCondition.amount,
        order: [[whereCondition.sortBy, 'DESC']]
    });
}
function getById(id) {
    return Product_1.Product.findOne({
        where: {
            phoneId: id
        }
    });
}
exports.productsService = {
    getAll,
    getById
};
