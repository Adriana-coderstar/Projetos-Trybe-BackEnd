const userService = require('../services/userServices');
const jwtGenerator = require('../helpers/jwtGenerator');
const { User } = require('../models');

const createNewUser = async (req, res, next) => {
  try {
    const { displayName, email, password, image } = req.body;

    const newUser = await userService.create(displayName, email, password, image);

    if (!newUser) {
      return res.status(409).json({ message: 'User already registered' });
    }
    const token = jwtGenerator({ id: newUser.id });

    return res.status(201).json({ token });
  } catch (error) {
    return next(error);
  }
};

const getUser = async (_req, res, next) => {
  try {
    const getAll = await User.findAll({ 
      attributes: { exclude: 'password' },
    });

    return res.status(200).json(getAll);
  } catch (error) {
    return next(error);
  }
};

const getUserId = async (req, res, next) => {
  try {
    const { id } = req.params;

    const getById = await User.findByPk(id,
    { attributes: { exclude: 'password' } });
    
    if (!getById) {
      return res.status(404).json({ message: 'User does not exist' });
    }

    return res.status(200).json(getById);
  } catch (error) {
    return next(error);
  }
};

module.exports = { createNewUser, getUser, getUserId };