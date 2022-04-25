const express = require('express');
const postBlogValidate = require('../middlewares/postBlogValidate');
const authMiddleware = require('../middlewares/auth.middleware');
const postBlogController = require('../controller/postBlogController');

const router = express.Router();

router.post('/', postBlogValidate, authMiddleware, postBlogController.createNewPost);

router.get('/', authMiddleware, postBlogController.getAllPost);

module.exports = router;