const express = require('express');
const { productsController } = require('../controllers');
const productsMiddleware = require('../middlewares/products.middleware');

const router = express.Router();

router.get(
  '/',
  productsController.listProducts,
);

router.get(
  '/:id',
  productsController.getProduct,
);
router.post(
  '/',
  productsMiddleware,
  productsController.createProduct,
);

router.delete(
  '/:id',
  // middleware,
  productsController.deleteProduct,
);

module.exports = router;