const validatePassword = (req, res, next) => {
  const { password } = req.body;

  try {
    if (password === '' || !password) {
      return res.status(400).json({ message: 'O campo "password" é obrigatório' });
    }
    
    if (password.length < 6) {
      return res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
    }

    return next();
  } catch (e) {
    return next(e);
  }
};

module.exports = validatePassword;