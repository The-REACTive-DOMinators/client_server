'use strict';

import { Response, Request } from 'express';
import { productsService } from '../services/products';

const getAllProducts = async (req: Request, res: Response) => {
  const phones = await productsService.getAll(req.query);

  if (!phones) {
    res.sendStatus(404);
    return;
  }

  res.status(200);
  res.json(phones);
};

const getProductById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const phone = await productsService.getById(id);

  if (!phone) {
    res.sendStatus(404);
    return;
  }

  res.status(200);
  res.json(phone);
};

export const productsController = {
  getAllProducts,
  getProductById
};
