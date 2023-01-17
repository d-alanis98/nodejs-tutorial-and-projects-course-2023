const router = require('express').Router();
// Controller
const usersController = require('../controllers/usersController');

router.route('/')
    .get(usersController.get)
    .post(usersController.create);

router.route('/:id')
    .get(usersController.show);

module.exports = router;