const categorySchema = require('../schemas/categorySchema');

const userValidate = (req, res, next) => {
  const { error } = categorySchema.validate(req.body);

  if (error) {
    const [code, message] = error.message.split('|');
    return res.status(code).json({ message });
  }
  return next();
};

module.exports = userValidate; 