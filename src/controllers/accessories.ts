import { accessoriesService } from '../services/accessories';
import { Response, Request } from 'express';

const getAllAccessories = async (req: Request, res: Response) => {
  const accessories = await accessoriesService.getAll();

  res.status(200);
  res.json(accessories);
};

export const accessoriesController = {
  getAllAccessories
};
