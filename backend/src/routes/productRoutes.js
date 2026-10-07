const express = require('express');
const { getProducts, getProductById, addProduct, updateProduct } = require('../controllers/productController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, getProducts);
router.get('/:id', authMiddleware, getProductById);
router.post('/', authMiddleware, addProduct);
router.put('/:id', authMiddleware, updateProduct);

module.exports = router;
