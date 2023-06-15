'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsService = void 0;
const filterByQuery_1 = require("../utils/filterByQuery");
const Products_1 = require("../models/Products");
function getAll(queries) {
    const whereCondition = (0, filterByQuery_1.filterByQuery)(queries);
    const offset = (whereCondition.currentPage - 1) * whereCondition.amount;
    const limit = whereCondition.amount * whereCondition.currentPage;
    return Products_1.Products.findAll({
        where: {
            category: 'phones'
        },
        order: [[whereCondition.sortBy, whereCondition.sortType]],
        limit: limit - offset,
        offset: offset
    });
}
function getById(id) {
    return Products_1.Products.findByPk(id);
}
exports.productsService = {
    getAll,
    getById
};
