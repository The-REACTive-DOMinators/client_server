import { Phones } from '../models/Phones';

function getById(id: string) {
  return Phones.findByPk(id);
}

function getCount() {
  return Phones.count();
}
export const phonesService = {
  getById,
  getCount
};
