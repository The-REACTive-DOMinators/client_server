import { Phones } from '../models/Phone';

function getById(id: string) {
  return Phones.findByPk(id);
}

export const phonesService = {
  getById
};
