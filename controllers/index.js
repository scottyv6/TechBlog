const router = require('express').Router();

const apiRoutes = require('./api/index');
const authRoutes = require('./web/auth');
const webRoutes = require('./web/index');

router.use('/api', apiRoutes);
router.use(authRoutes);
router.use(webRoutes);

module.exports = router;