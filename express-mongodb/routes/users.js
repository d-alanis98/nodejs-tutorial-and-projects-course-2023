const usersController = require('../controllers/usersController');

const router = require('express').Router();

router.route('/') 
    .get(usersController.get);

module.exports = router;