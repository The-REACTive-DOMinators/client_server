'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterByQuery = void 0;
function filterByQuery(queries) {
    const { sortBy, amount, sortType, currentPage } = queries;
    const whereCondition = {
        sortBy: 'year',
        amount: 3,
        sortType: 'DESC',
        currentPage: 1
    };
    if (sortBy) {
        whereCondition.sortBy = sortBy;
    }
    if (amount) {
        whereCondition.amount = amount;
    }
    if (sortType) {
        whereCondition.sortType = sortType;
    }
    if (currentPage) {
        whereCondition.currentPage = currentPage;
    }
    return whereCondition;
}
exports.filterByQuery = filterByQuery;
