'use strict';

import { query, whereCondition } from '../types/types';

export function filterByQuery(queries: query): whereCondition {
  const { sortBy, amount, sortType } = queries;
  const whereCondition: whereCondition = {
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
