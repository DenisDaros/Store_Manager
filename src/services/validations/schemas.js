const Joi = require('joi');

const idSchema = Joi.number().integer().min(1).required();

const addProductSchema = Joi.object({
  name: Joi.string().min(5).required(),
});

const product = Joi.object().required();

module.exports = {
  idSchema,
  addProductSchema,
  product,
};