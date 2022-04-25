const Joi = require('joi');

module.exports = Joi.object({
  displayName: Joi.string().min(8).required().messages({
    'any.required': '400|"displayName" is required',
    'string.min': '400|"displayName" length must be at least 8 characters long',
    'string.base': '422|"displayName" must be a string',
  }),
  email: Joi.string().email().required().messages({
    'any.required': '400|"email" is required',
    'string.email': '400|"email" must be a valid email',
    'string.base': '422|"email" must be a string',

  }),
  password: Joi.string().length(6).required().messages({
    'any.required': '400|"password" is required',
    'string.length': '400|"password" length must be 6 characters long',
    'string.base': '422|"password" must be a string',
  }),
  image: Joi.string().required().messages({
    'any.required': '400|"image" is required',
    'string.base': '422|"image" must be a string',
  }),
});