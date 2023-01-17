const Router = require('express').Router;
// Child routes
const usersRoutes = require('./users');
const productsRoutes = require('./products');

const router = Router();

router.use('/products', productsRoutes);

router.use('/users', usersRoutes);

module.exports = router;