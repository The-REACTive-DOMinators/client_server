import { Phones } from '../models/Phone';

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
