const { StatusCodes } = require('http-status-codes');
const productModel = require('../models/productModel');
const productService = require('../services/product.service');

const getAllProduct = async (_req, res, next) => {
  try {
    const getAll = await productModel.getAllProduct();

    return res.status(StatusCodes.OK).json(getAll);
  } catch (e) {
    return next(e);
  }
};

const productById = async (req, res, next) => {
  try {
    const { id } = req.params;
  
    const [product] = await productModel.getById(id);
  
    if (!product) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: 'Product not found' });
    }
  
    return res.status(StatusCodes.OK).json(product);
  } catch (e) {
    return next(e);
  }
};

const createNewProduct = async (req, res, next) => {
  try {
    const { name, quantity } = req.body;

    const newProduct = await productService.createProduct(name, quantity);

    if (!newProduct) {
      return res.status(StatusCodes.CONFLICT).json({ message: 'Product already exists' });
    }

    return res.status(StatusCodes.CREATED).json(newProduct);
  } catch (e) {
    return next(e);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, quantity } = req.body;

    const products = await productService.updateProductService(id, name, quantity);
  
    if (!products) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: 'Product not found' });
    }

    return res.status(StatusCodes.OK).json(products);
  } catch (e) {
    return next(e);
  }
};

const removeProducts = async (req, res, next) => {
  try {
    const { id } = req.params;

    const removeProduct = await productService.deleteProduct(id);

    if (!removeProduct) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: 'Product not found' });
    }

    return res.status(StatusCodes.NO_CONTENT).json(removeProduct);
  } catch (e) {
    return next(e);
  }
};

module.exports = { 
  getAllProduct, 
  productById, 
  createNewProduct, 
  updateProduct, 
  removeProducts,
};