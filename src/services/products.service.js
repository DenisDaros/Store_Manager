const { productsModel } = require('../models');

const findAll = async () => {
  const passengers = await productsModel.findAll();
  return { type: null, message: passengers };
};

module.exports = {
  findAll,
};