const router = require('express').Router();
// Routes
const usersRoutes = require('./users');


router.use('/users', usersRoutes);

module.exports = router;