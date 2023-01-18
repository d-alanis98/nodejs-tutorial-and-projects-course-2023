const router = require('express').Router();
// Routes
const usersRoutes = require('./users');
const rolesRoutes = require('./roles');

router.use('/users', usersRoutes);
router.use('/roles', rolesRoutes);

module.exports = router;