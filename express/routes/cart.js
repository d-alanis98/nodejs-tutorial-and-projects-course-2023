const cartController = require('../controllers/cartController');

const router = require('express').Router();

router.route('/')
    .get(cartController.get)
    .post(cartController.create);

router.post('/add_product', cartController.addProduct);


module.exports = router;

