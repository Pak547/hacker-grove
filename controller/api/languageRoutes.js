const router = require('express').Router();
const Language = require('../../models/Language');
const withAuth = require('../../utils/auth');


router.get('/', async (req, res) => {
    try {
        const languageData = await Language.findAll({
            attributes: { exclude: ['password'] },
            order: [['name', 'ASC']],
        });
        const languages = languageData.map((project) => project.get({ plain: true }));
        res.render('homepage', {
            languages,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});



module.exports = router;