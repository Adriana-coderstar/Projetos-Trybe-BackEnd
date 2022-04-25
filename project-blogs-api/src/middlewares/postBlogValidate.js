const postBlogSchema = require('../schemas/postBlogSchema');

const postBlogValidate = (req, res, next) => {
  const { error } = postBlogSchema.validate(req.body);

  if (error) {
    const [code, message] = error.message.split('|');
    return res.status(code).json({ message });
  }
  return next();
};

module.exports = postBlogValidate; 