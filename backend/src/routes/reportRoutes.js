const express = require('express');
const { getDashboardSummary, getSalesReport } = require('../controllers/reportController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/dashboard', authMiddleware, getDashboardSummary);
router.get('/sales', authMiddleware, getSalesReport);

module.exports = router;
