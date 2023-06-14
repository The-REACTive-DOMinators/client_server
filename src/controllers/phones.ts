import { Request, Response } from 'express';
import { phonesService } from '../services/phones';

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

export const phonesController = {
  getPhoneById
};
