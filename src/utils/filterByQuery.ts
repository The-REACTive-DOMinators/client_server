'use strict';

import { query, whereCondition } from '../types/types';

export function filterByQuery(queries: query): whereCondition {
  const { sortBy, amount, sortType, currentPage, category } = queries;
  const whereCondition: whereCondition = {
    sortBy: 'year',
    amount: 16,
    sortType: 'DESC',
    currentPage: 1,
    category: 'phones'
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

  if (category) {
    whereCondition.category = category;
  }

  return whereCondition;
}
