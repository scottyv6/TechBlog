const router = require('express').Router();

const userRoutes = require('./api/users');
const authRoutes = require('./web/auth');
const webRoutes = require('./web/index');

router.use(userRoutes);
router.use(authRoutes);
router.use(webRoutes);

module.exports = router;