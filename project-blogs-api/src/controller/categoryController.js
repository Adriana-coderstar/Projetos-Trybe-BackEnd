const { Category } = require('../models');

const createNewCategory = async (req, res, next) => {
  try {
    const { name } = req.body;

    const newCategory = await Category.create({ name });

    return res.status(201).json(newCategory);
  } catch (error) { 
    return next(error);
  }
};

const geAllCategories = async (_req, res, next) => {
  try {
    const getAll = await Category.findAll();

    return res.status(200).json(getAll);
  } catch (error) {
    return next(error);
  }
};

module.exports = { createNewCategory, geAllCategories };