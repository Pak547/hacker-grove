const router = require('express').Router();
const loginRoutes = require('./loginRoutes');
const signupRoutes = require('./signupRoutes');
const forgotPasswordRoutes = require('./forgotpasswordRoute');
const languageRoutes = require('./languageRoutes');
const projectRoutes = require('./projectRoutes');


router.use('/login', loginRoutes);
router.use('/signup', signupRoutes);
router.use('/forgotpassword', forgotPasswordRoutes);
router.use('/language', languageRoutes);
router.use('/project', projectRoutes);


module.exports = router;