'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterByQuery = void 0;
function filterByQuery(queries) {
    const { sortBy, amount, sortType } = queries;
    const whereCondition = {
        sortBy: 'year',
        amount: 16,
        sortType: 'DESC'
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
    return whereCondition;
}
exports.filterByQuery = filterByQuery;
