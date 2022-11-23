const { salesModel } = require('../models');
const { validateId } = require('./validations/validations');

const findAll = async () => {
  const productAll = await salesModel.findAllSales();
  return { type: null, message: productAll };
};

const findById = async (productId) => {
  const error = validateId(productId);
  if (error.type) return error;

  const sale = await salesModel.findSalesById(productId);
  if (!sale.length) return { type: 'INVALID_ID', message: 'Sale not found' };

  return { type: null, message: sale };
};

module.exports = {
  findAll,
  findById,
};