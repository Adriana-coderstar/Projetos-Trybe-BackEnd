const express = require('express');
const saleController = require('../controllers/salesController');
const salesValidate = require('../middlewares/salesValidate');

const router = express.Router();

router.get('/', saleController.getAllSales);

router.get('/:id', saleController.getByIdSales);

router.post('/', salesValidate, saleController.createSales);

router.put('/:id', salesValidate, saleController.updateSales);

module.exports = router;
