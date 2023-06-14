'use strict';

import { query } from '../types/types';
import { filterByQuery } from '../utils/filterByQuery';
import { Product } from '../models/Products';

function getAll(queries: query) {
  const whereCondition = filterByQuery(queries);

  return Product.findAll({
    where: {
      category: 'phones'
    },
    limit: whereCondition.amount,
    order: [[whereCondition.sortBy, 'DESC']]
  });
}

function getById(id: string) {
  return Product.findOne({
    where: {
      phoneId: id
    }
  });
}

export const productsService = {
  getAll,
  getById
};
