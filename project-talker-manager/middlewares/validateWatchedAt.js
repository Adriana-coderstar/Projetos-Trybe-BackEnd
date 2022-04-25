const validateWatchedAt = (req, res, next) => {
  try {
    const { talk: { watchedAt, rate } } = req.body;

    if (!watchedAt || !rate) {
      return res.status(400).json({ 
        message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' });
    }

    return next();
  } catch (e) { return next(e); }
};

module.exports = validateWatchedAt;