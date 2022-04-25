const { User } = require('../models');
const jwtGenerator = require('../helpers/jwtGenerator');

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const checkExistingEmail = await User.findOne({ where: { email } });

    if (!checkExistingEmail || checkExistingEmail.password !== password) {
      return res.status(400).json({ message: 'Invalid fields' });
    }

    const token = jwtGenerator({ 
      id: checkExistingEmail.id, displayName: checkExistingEmail.displayName });

    return res.status(200).json({ token });
  } catch (error) {
    return next(error);
  }
};

module.exports = { loginUser };