const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const loginRoutes = require('./api/loginRoutes');
const signupRoutes = require('./api/signupRoutes');

router.use('/', homeRoutes);
router.use('/login', loginRoutes);
router.use('/signup', signupRoutes);

module.exports = router;
