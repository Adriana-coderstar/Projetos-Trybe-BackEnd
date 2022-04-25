const productSchema = require('../schemas/productSchema');

const productValidate = (req, res, next) => {
  const { error } = productSchema.validate(req.body);

  if (error) {
    const [code, message] = error.message.split('|');
    return res.status(code).json({ message });
  }
  return next();
};

module.exports = productValidate; 