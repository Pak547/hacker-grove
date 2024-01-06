const router = require('express').Router();
require('dotenv').config();

// signing up will enter information into database
router.post('/signup', async(req, res) => {
    // add User to database
    try {
        const userData = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(400).json(err);
    }
}
);

module.exports = router;