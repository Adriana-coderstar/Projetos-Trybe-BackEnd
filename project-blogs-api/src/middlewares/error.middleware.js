const errorMiddleware = (error, _req, res, _next) => res.status(500)
  .json({ message: error.message });

module.exports = errorMiddleware;