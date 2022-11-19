const { productsModel } = require('../models');
const { validateId, validateNewProduct } = require('./validations/validations');

const findAll = async () => {
  const productAll = await productsModel.findAll();
  return { type: null, message: productAll };
};

const findById = async (productId) => {
  const error = validateId(productId);
  if (error.type) return error;

  const product = await productsModel.findById(productId);
  if (product) return { type: null, message: product };
  
  return { type: 'ID_NOT_FOUND', message: 'Product not found' };
};

const createProduct = async (name) => {
  const error = validateNewProduct({ name });
  if (error.type) return error;

  const newProductId = await productsModel.insert({ name });
  const newProduct = await productsModel.findById(newProductId);

  return { type: null, message: newProduct };
};

module.exports = {
  findAll,
  findById,
  createProduct,
};