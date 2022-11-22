const { productsService } = require('../services');

const listProducts = async (_req, res) => {
  const { type, message } = await productsService.findAll();

  if (type) return res.status(404).json(message);

  res.status(200).json(message);
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.findById(id);

  if (type) return res.status(404).send({ message: 'Product not found' });

  res.status(200).json(message);
};

const createProduct = async (req, res) => {
  const { name } = req.body;

  const { message, type } = await productsService.createProduct(name);

  if (type) return res.status(422).send({ message });

  res.status(201).json(message);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  const { type, message } = await productsService.deleteProductById(Number(id));
 
  if (type) return res.status(404).send({ message });

  res.status(204).json({ message: 'Product deleted' });
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const { type, message } = await productsService.updateProduct(id, name);

  if (type) return res.status(404).send({ message: 'Product not found' });

  res.status(200).json(message);
};

module.exports = {
  listProducts,
  getProduct,
  createProduct,
  deleteProduct,
  updateProduct,
};