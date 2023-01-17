const router =  require('express').Router();
// Controllers
const productsController = require('../controllers/productsController');


router.route('/')
    .get(productsController.get)
    .post(productsController.create);

router.route('/:productId')
    .get(productsController.show)
    .put(productsController.update)
    .delete(productsController.delete);

module.exports = router;