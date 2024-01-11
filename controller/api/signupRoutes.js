const router = require('express').Router();
const { User } = require('../../models');
require('dotenv').config();

// signing up will enter information into database
router.post('/signup', async (req, res) => {
    // add User to database
    try {
        const userData = await User.create(req.body);
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