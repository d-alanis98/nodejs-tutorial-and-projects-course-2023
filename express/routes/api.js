const Router = require('express').Router;
// Controllers
const productsController = require('../controllers/productsController');

const router = Router();

router.get('/', productsController.getAll);

router.get('/query', productsController.getByQuery);

module.exports = router;