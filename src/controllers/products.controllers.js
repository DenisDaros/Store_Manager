const { productsService } = require('../services');

const errorMap = {
  PRODUCT_NOT_FOUND: 404,
};

const mapError = (type) => errorMap[type] || 500;

const listProducts = async (_req, res) => {
  const { type, message } = await productsService.findAll();

  if (type) return res.status(mapError(type)).json(message);

  res.status(200).json(message);
};

module.exports = {
  listProducts,
};