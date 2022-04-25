const express = require('express');
const productController = require('../controllers/productController');
const productValidate = require('../middlewares/productValidate');

const router = express.Router();

router.get('/', productController.getAllProduct);

router.get('/:id', productController.productById);

router.post('/', productValidate, productController.createNewProduct);

router.put('/:id', productValidate, productController.updateProduct);

router.delete('/:id', productController.removeProducts);

module.exports = router;