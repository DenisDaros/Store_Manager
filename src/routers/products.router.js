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
  productsMiddleware.midName,
  productsController.createProduct,
);

router.delete(
  '/:id',
  productsController.deleteProduct,
);

router.put(
  '/:id',
  productsMiddleware.midName,
  productsMiddleware.midId,
  productsMiddleware.midNameLength,
  productsController.updateProduct,
);

module.exports = router;