const express = require('express');
const { createSale, getSales } = require('../controllers/saleController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, getSales);
router.post('/', authMiddleware, createSale);

module.exports = router;
