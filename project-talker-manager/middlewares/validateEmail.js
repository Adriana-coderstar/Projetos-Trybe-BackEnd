const validateEmail = (req, res, next) => {
  try {
    const { email } = req.body;
    const VALID_EMAIL = (/\S+@\S+\.\S+/);

    if (email === '' || !email) {
      return res.status(400).json({ message: 'O campo "email" é obrigatório' });
    } 
    
    if (!VALID_EMAIL.test(email)) {
      return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
    }

    return next();
  } catch (e) {
    return next(e);
  }
};

module.exports = validateEmail;