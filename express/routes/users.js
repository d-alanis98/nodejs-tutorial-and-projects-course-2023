const router = require('express').Router();
// Controller
const usersController = require('../controllers/usersController');

router.route('/')
    .get(usersController.get)
    .post(usersController.create);

router.get('/:id', usersController.getById);

module.exports = router;