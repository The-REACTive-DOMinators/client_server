import { Response, Request } from 'express';
import { productsService } from '../services/products';
import { Sequelize } from 'sequelize';

const getHotPrices = async (req: Request, res: Response) => {
  const query = {
    sortBy: Sequelize.literal('random()'),
    amount: 16,
    sortType: 'ASC'
  };
  const phones = await productsService.getAll(query);

  if (!phones) {
    res.sendStatus(404);
    return;
  }

  res.status(200);
  res.json(phones);
};

export const hotPricesController = {
  getHotPrices
};
