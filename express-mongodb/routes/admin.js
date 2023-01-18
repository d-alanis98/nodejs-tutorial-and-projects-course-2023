const router = require('express').Router();
// Routes
const productsRoutes = require('./products');

router.use('/products', productsRoutes);

module.exports = router;