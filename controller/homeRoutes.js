const router = require('express').Router();
const { Project, User, Language } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        res.render('homepage');
    } catch (err) {
        res.status(500).json(err);
    }
}
);

router.get('/login', async (req, res) => {
    try {
        res.render('login');
    } catch (err) {
        res.status(500).json(err);
    }
}
);

router.get('/signup', async (req, res) => {
    try {
        res.render('signup');
    } catch (err) {
        res.status(500).json(err);
    }
}
);

router.get('/forgotPassword', async (req, res) => {
    try {
        res.render('forgotPassword');
    } catch (err) {
        res.status(500).json(err);
    }
}
);

router.get('/project/:id', withAuth, async (req, res) => {
    try {
        const projectData = await Project.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });
        const project = projectData.get({ plain: true });
        res.render('updateProject', {
            ...project,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/user', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            include: [
                {
                    model: Project,
                    attributes: [
                        'id',
                        'title',
                        'description',
                        'hours',
                        'languages',
                        'deploy_link',
                        'github_link',
                    ],
                },
                {
                    model: Language,
                    attributes: [
                        'id',
                        'hours',
                        'language',
                    ],
                },
            ],
        });
        const user = userData.get({ plain: true });
        res.render('user', { user, loggedIn: true });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;