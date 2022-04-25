const Sequelize = require('sequelize');
const { Category, BlogPost, PostCategory } = require('../models');
const config = require('../config/config');

const sequelize = new Sequelize(config.development);

const createPost = async (title, content, categoryIds, userId) => {
  try {
    const result = await sequelize.transaction(async (t) => {
      const allCategories = await Category.findAll({ attributes: ['id'] });

      const arrayCategories = allCategories.map((item) => item.id);
      
      const checkCategorieId = categoryIds.every((id) => arrayCategories.includes(id));
      
      if (!checkCategorieId) return { code: 400, message: '"categoryIds" not found' };
      
      const newCreatePost = await BlogPost.create({ title, content, userId }, { transaction: t });
      
      await Promise.all(categoryIds.map((item) => PostCategory.create(
        { postId: newCreatePost.id, categoryId: item }, { transaction: t },
        )));
        
        return { code: 201, newCreatePost };
    });      
    return result;
  } catch (error) {
    console.log(error);
    return { code: 500, message: error.message };
  }
};

module.exports = { createPost };