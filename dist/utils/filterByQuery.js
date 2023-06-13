'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterByQuery = void 0;
function filterByQuery(queries) {
    const { sortBy, amount } = queries;
    const whereCondition = {
        sortBy: 'year',
        amount: 16
    };
    if (sortBy) {
        whereCondition.sortBy = sortBy;
    }
    if (amount) {
        whereCondition.amount = amount;
    }
    return whereCondition;
}
exports.filterByQuery = filterByQuery;
