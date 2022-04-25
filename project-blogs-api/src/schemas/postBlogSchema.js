const Joi = require('joi');

module.exports = Joi.object({
  title: Joi.string().required().empty()
  .messages({
    'any.required': '400|"title" is required',
    'string.base': '422|"title" must be a string',
    'string.empty': '400|"title" is not allowed to be empty',
  }),
  content: Joi.string().required()
  .messages({
    'any.required': '400|"content" is required',
    'string.base': '422|"content" must be a string',
  }),
  categoryIds: Joi.array().items(Joi.number()).required()
  .messages({
    'any.required': '400|"categoryIds" is required',
    'array.bases': '400|"categoryIds" must be an array',
  }),
});