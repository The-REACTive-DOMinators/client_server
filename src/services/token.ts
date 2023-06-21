import { Token } from '../models/Token';

async function save(userId: string, refreshToken: string) {
  const token = await Token.findOne({
    where: {
      userId
    }
  });

  if (token) {
    token.token = refreshToken;
    await token.save();

    return token;
  }

  return Token.create({
    token: refreshToken,
    userId
  });
}

function getByToken(refreshToken: string) {
  return Token.findOne({
    where: {
      refreshToken
    }
  });
}

function remove(userId: string) {
  return Token.destroy({
    where: { userId }
  });
}

export const tokenService = {
  save,
  getByToken,
  remove
};
