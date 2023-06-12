'use strict';

import { query, whereCondition } from '../types/types';

export function filterByQuery(queries: query): whereCondition {
  const { sortBy, amount } = queries;
  const whereCondition: whereCondition = {
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
