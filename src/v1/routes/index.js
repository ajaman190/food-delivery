const express = require('express');
const pricingRoutes = require('./pricingRoutes');
const { handleErrors } = require('../middleware/errorHandling');

const router = express.Router();

router.use(express.json());

// API routes
router.use('/pricing', pricingRoutes);

// Error handling middleware
router.use(handleErrors);

module.exports = router;
