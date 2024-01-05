const router = require('express').Router();
const loginRoutes = require('/loginRoutes');
const signupRoutes = require('/signupRoutes');
const forgotPasswordRoutes = require('/forgotpasswordRoutes');
const languageRoutes = require('/languageRoutes');
const projectRoutes = require('/projectRoutes');
const userRoutes = require('/userRoutes');

router.use('/login', loginRoutes);
router.use('/signup', signupRoutes);
router.use('/forgotpassword', forgotPasswordRoutes);
router.use('/language', languageRoutes);
router.use('/project', projectRoutes);
router.use('/user', userRoutes);

module.exports = router;