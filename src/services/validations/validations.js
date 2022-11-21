const { idSchema, addProductSchema, product } = require('./schemas');

const validateId = (id) => {
  const { error } = idSchema.validate(id);
  if (error) return { type: 'INVALID_VALUE', message: '"id" must be a number' };

  return { type: null, message: '' };
};

const validateNewProduct = (name) => {
  const { error } = addProductSchema.validate(name);
  if (error) {
    return {
      type: 'INVALID_VALUE',
      message: '"name" length must be at least 5 characters long',
    };
  }
  return { type: null, message: '' };
};

const validateExist = (id) => {
  const { error } = idSchema.validate(id);

  if (error) {
    return {
      type: 'INVALID_VALUE',
      message: 'Product not found',
    };
  }
  return { type: null, message: '' };
};

const validateProduct = (name) => {
  const { error } = product.validate(name);

  if (error) {
    return {
      type: 'INVALID_PRODUCT',
      message: 'Product not found',
    };
  }
  return { type: null, message: '' };
};

module.exports = {
  validateId,
  validateNewProduct,
  validateExist,
  validateProduct,
};