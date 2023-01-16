const router = require('express').Router();
// Controller
const usersController = require('../controllers/usersController');

router.get('/', usersController.getUsers);
router.get('/:id', usersController.getUserById);

module.exports = router;