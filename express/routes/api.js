const Router = require('express').Router;
// Child routes
const cartRoutes = require('./cart');
const usersRoutes = require('./users');
const productsRoutes = require('./products');

const router = Router();

// Products API endpoints
router.use('/products', productsRoutes);
// Users API endpoints
router.use('/users', usersRoutes);
// Cart API endpoints
router.use('/cart', cartRoutes);

module.exports = router;