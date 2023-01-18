const router = require('express').Router();
// Controllers
const roleController = require('../controllers/roleController');

router.route('/')
    .get(roleController.get)
    .post(roleController.create);

module.exports = router;