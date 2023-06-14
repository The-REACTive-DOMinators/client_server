import { Response, Request } from 'express';
import { productsService } from '../services/products';

const getNewest = async (req: Request, res: Response) => {
  const query = {
    sortBy: 'year',
    amount: 16,
    sortType: 'DESC'
  };
  const phones = await productsService.getAll(query);

  if (!phones) {
    res.sendStatus(404);
    return;
  }

  res.status(200);
  res.json(phones);
};

export const newestController = {
  getNewest
};
