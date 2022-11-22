const midName = (req, res, next) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }

  return next();
};
 
const midId = (req, res, next) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: 'id is required' });
  }

  return next();
};

const midNameLength = (req, res, next) => {
  const { name } = req.body;

  if (name.length < 5) {
    return res.status(422).json({
      message: '"name" length must be at least 5 characters long',
    });
  }

  return next();
};

module.exports = {
  midName,
  midId,
  midNameLength,
};