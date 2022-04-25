const express = require('express');
const loginValidate = require('../middlewares/loginValidate');
const loginController = require('../controller/loginController');

const router = express.Router();

router.post('/', loginValidate, loginController.loginUser);

module.exports = router;