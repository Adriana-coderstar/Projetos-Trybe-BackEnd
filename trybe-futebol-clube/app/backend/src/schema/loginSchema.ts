import * as joi from 'joi';

const fieldsData = '400|All fields must be filled';

export default joi.object({
  email: joi.string().email().required().messages({
    'string.email': '401|Incorrect email or password',
    'any.required': fieldsData,
    'string.empty': fieldsData,
  }),
  password: joi.string().required().min(6).messages({
    'string.min': '401|Incorrect email or password',
    'any.required': fieldsData,
    'string.empty': fieldsData,
  }),
});
