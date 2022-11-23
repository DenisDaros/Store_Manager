const { salesService } = require('../services');

const listSales = async (_req, res) => {
  const { message } = await salesService.findAll();

  res.status(200).json(message);
};

const getSales = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesService.findById(Number(id));

  if (type) return res.status(404).send({ message });

  res.status(200).json(message);
};

module.exports = {
  listSales,
  getSales,
};