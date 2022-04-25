const { User } = require('../models');

const create = async (displayName, email, password, image) => {
  const checkExistingEmail = await User.findOne({ where: { email } });

  if (checkExistingEmail) return null;

  const newUser = await User.create({ displayName, email, password, image });

  return newUser;
};

module.exports = { create };