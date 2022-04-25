const saleSchema = require('../schemas/saleSchema');

const salesValidate = (req, res, next) => {
  const { error } = saleSchema.validate(req.body);

  if (error) {
    const [code, message] = error.message.split('|');
    return res.status(code).json({ message });
  }
  return next();
};

module.exports = salesValidate; 