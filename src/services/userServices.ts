import { User } from '../models/User';

function getByEmail(email: string) {
  return User.findOne({ where: { email } });
}

function getAllActiveUsers() {
  return User.findAll({ where: { activationToken: null } });
}

function normalize(user: User) {
  return {
    id: user.id,
    email: user.email
  };
}

export const userServices = {
  getByEmail,
  getAllActiveUsers,
  normalize
};
