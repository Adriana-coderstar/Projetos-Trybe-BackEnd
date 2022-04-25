const { StatusCodes } = require('http-status-codes');
const salesModel = require('../models/salesModel');
const saleServices = require('../services/sales.service');

const getAllSales = async (_req, res, next) => {
  try {
    const getAll = await salesModel.getAllSales();

    return res.status(StatusCodes.OK).json(getAll);
  } catch (e) {
    return next(e);
  }
};

const getByIdSales = async (req, res, next) => {
  try {
    const { id } = req.params;
    const getSaleById = await salesModel.getSaleById(Number(id));

    if (getSaleById.length <= 0) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: 'Sale not found' });
    }

    return res.status(StatusCodes.OK).json(getSaleById);
  } catch (e) {
    return next(e);
  }
};

const createSales = async (req, res, next) => {
  try {
    const getSales = await saleServices.createSale(req.body);

    return res.status(StatusCodes.CREATED).json(getSales);
  } catch (e) {
    return next(e);
  }
};

const updateSales = async (req, res, next) => {
  try {
    const { id } = req.params;

    const productSale = req.body;
    
    const updateSale = await saleServices.updateSales(Number(id), productSale);

      return res.status(StatusCodes.OK).json(updateSale);
  } catch (e) {
    return next(e);
  }
};

module.exports = { getAllSales, getByIdSales, createSales, updateSales };