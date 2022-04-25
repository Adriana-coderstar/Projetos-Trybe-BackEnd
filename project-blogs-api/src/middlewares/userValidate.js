const userSchema = require('../schemas/userSchema');

const userValidate = (req, res, next) => {
  const { error } = userSchema.validate(req.body);

  if (error) {
    const [code, message] = error.message.split('|');
    return res.status(code).json({ message });
  }
  return next();
};

module.exports = userValidate; 