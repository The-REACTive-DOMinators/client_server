'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsService = void 0;
const filterByQuery_1 = require("../utils/filterByQuery");
const Products_1 = require("../models/Products");
function getAll(queries) {
    const whereCondition = (0, filterByQuery_1.filterByQuery)(queries);
    return Products_1.Products.findAll({
        where: {
            category: 'phones'
        },
        limit: whereCondition.amount * whereCondition.currentPage,
        order: [[whereCondition.sortBy, whereCondition.sortType]],
        offset: (whereCondition.currentPage - 1) * whereCondition.amount
    });
}
function getById(id) {
    return Products_1.Products.findByPk(id);
}
exports.productsService = {
    getAll,
    getById
};
