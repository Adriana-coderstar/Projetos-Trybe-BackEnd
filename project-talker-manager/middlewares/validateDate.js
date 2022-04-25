// Referencia Regex = https://stackoverflow.com/questions/15196451/regular-expression-to-validate-datetime-format-mm-dd-yyyy
const validateDate = (req, res, next) => {
  try {
    const { talk: { watchedAt } } = req.body;
    const VALIDATE_DATE = /^\d{2}\/\d{2}\/\d{4}$/;

    if (!VALIDATE_DATE.test(watchedAt)) {
      return res.status(400).json({ 
        message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
    }

    return next();
  } catch (e) { return next(e); }
};

module.exports = validateDate;