const blogPostService = require('../services/blogPostservice');
const { BlogPost, User, Category } = require('../models');

const createNewPost = async (req, res, next) => {
  try {
    const { id: userId } = req.tokenData;

    const { title, content, categoryIds } = req.body;

    const { code, message, newCreatePost } = await blogPostService.createPost(
      title, content, categoryIds, userId,
    );

    if (message) return res.status(code).json({ message });

    return res.status(code).json(newCreatePost);
  } catch (error) {
    return next(error);
  }
};

const getAllPost = async (_req, res, next) => {
  try {
    const getAll = await BlogPost.findAll({
      include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } }, 
      { model: Category, as: 'categories', through: { attributes: [] } }, 
      ] });

    return res.status(200).json(getAll);
  } catch (error) {
    return next(error);
  }
};
module.exports = { createNewPost, getAllPost };