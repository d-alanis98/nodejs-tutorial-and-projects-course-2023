const router = require('express').Router();
// Controller
const productsController = require('../controllers/productsController');


router.route('/')
    .get(productsController.get)
    .post(productsController.create);

router.route('/:productId')
    .get(productsController.show);

module.exports = router;