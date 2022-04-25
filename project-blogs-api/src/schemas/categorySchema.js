const Joi = require('joi');

module.exports = Joi.object({
  name: Joi.string().required().messages({
    'any.required': '400|"name" is required',
    'string.base': '422|"displayName" must be a string',
  }),
});