const Router = require('express').Router;
// Controllers
const productsController = require('../controllers/productsController');
// Child routes
const usersRoutes = require('./users');

const router = Router();

router.get('/', productsController.getAll);

router.get('/query', productsController.getByQuery);

router.use('/users', usersRoutes);

module.exports = router;