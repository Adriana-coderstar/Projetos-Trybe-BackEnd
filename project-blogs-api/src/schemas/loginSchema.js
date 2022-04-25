const Joi = require('joi');

module.exports = Joi.object({
  email: Joi.string().email().required().empty()
  .messages({
    'any.required': '400|"email" is required',
    'string.email': '400|"email" must be a valid email',
    'string.base': '422|"email" must be a string',
    'string.empty': '400|"email" is not allowed to be empty',
  }),
  password: Joi.string().length(6).required().empty()
  .messages({
    'any.required': '400|"password" is required',
    'string.length': '400|"password" length must be 6 characters long',
    'string.base': '422|"password" must be a string',
    'string.empty': '400|"password" is not allowed to be empty',
  }),
});