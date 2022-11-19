module.exports = (req, res, next) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: 'products not passed' });
  }

  return next();
};