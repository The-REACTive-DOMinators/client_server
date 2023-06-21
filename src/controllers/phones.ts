import { Request, Response } from 'express';
import { phonesService } from '../services/phones';
import { Sequelize } from 'sequelize';
import { productsService } from '../services/products';

const getRecommended = async (req: Request, res: Response) => {
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

const getPhoneById = async (req: Request, res: Response) => {
  const { phoneId } = req.params;
  const phone = await phonesService.getById(phoneId);

  if (!phone) {
    res.sendStatus(404);
    return;
  }

  res.status(200);
  res.json(phone);
};

const getCountOfPhone = async (req: Request, res: Response) => {
  const phone = await phonesService.getCount();

  if (!phone) {
    res.sendStatus(404);
    return;
  }

  res.status(200);
  res.json(phone);
};

export const phonesController = {
  getRecommended,
  getPhoneById,
  getCountOfPhone
};
