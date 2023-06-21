import { Response, Request } from 'express';
import { tabletsService } from '../services/tablets';

const getAllTablets = async (req: Request, res: Response) => {
  const tablets = await tabletsService.getAll123();

  res.status(200);
  res.json(tablets);
};

export const tabletsController = {
  getAllTablets
};
