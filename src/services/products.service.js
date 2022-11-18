const { productsModel } = require('../models');
const { validateId } = require('./validations/validations');

const findAll = async () => {
  const passengers = await productsModel.findAll();
  return { type: null, message: passengers };
};

const findById = async (productId) => {
  const error = validateId(productId);
  if (error.type) return error;

  const product = await productsModel.findById(productId);
  if (product) return { type: null, message: product };
  return { type: 'ID_NOT_FOUND', message: 'Product not found' };
};

module.exports = {
  findAll,
  findById,
};