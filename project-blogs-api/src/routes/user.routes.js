const express = require('express');
const userValidate = require('../middlewares/userValidate');
const authMiddleware = require('../middlewares/auth.middleware');
const userController = require('../controller/userController');

const router = express.Router();

router.post('/', userValidate, userController.createNewUser);

router.get('/', authMiddleware, userController.getUser);

router.get('/:id', authMiddleware, userController.getUserId);

module.exports = router;