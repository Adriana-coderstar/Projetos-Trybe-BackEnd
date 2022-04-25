const crypto = require('crypto');

const generateToken = (_req, res, _next) => {
  const token = crypto.randomBytes(8).toString('hex');
  return res.status(200).json({ token });
};

module.exports = generateToken;
