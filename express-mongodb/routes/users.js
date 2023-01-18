const usersController = require('../controllers/usersController');

const router = require('express').Router();

router.route('/') 
    .get(usersController.get)
    .post(usersController.create);

router.route('/:userId')
    .get(usersController.show)
    .put(usersController.update)
    .delete(usersController.delete);

router.post('/:userId/assignRole', usersController.assignRole);

module.exports = router;