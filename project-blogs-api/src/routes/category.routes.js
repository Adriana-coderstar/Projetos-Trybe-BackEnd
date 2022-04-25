const express = require('express');
const categoryValidate = require('../middlewares/categoryValidate');
const authMiddleware = require('../middlewares/auth.middleware');
const categoryController = require('../controller/categoryController');

const router = express.Router();

router.post('/', categoryValidate, authMiddleware, categoryController.createNewCategory);

router.get('/', authMiddleware, categoryController.geAllCategories);

module.exports = router;