'use strict';

import { query } from '../types/types';
import { filterByQuery } from '../utils/filterByQuery';
import { Products } from '../models/Products';

function getAll(queries: query) {
  const whereCondition = filterByQuery(queries);
  const offset = (whereCondition.currentPage - 1) * whereCondition.amount;
  const limit = whereCondition.amount * whereCondition.currentPage;

  return Products.findAll({
    where: {
      category: 'phones'
    },
    order: [[whereCondition.sortBy, whereCondition.sortType]],
    limit: limit - offset,
    offset: offset
  });
}

function getById(id: string) {
  return Products.findByPk(id);
}

export const productsService = {
  getAll,
  getById
};
