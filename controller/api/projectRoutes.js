const router = require('express').Router();
const { User, Project, Language, Tracking } = require('../../models');
const withAuth = require('../../utils/auth');


// GET all user
router.get('/', withAuth, async (req, res) => {
    try {
        const projectData = await User.findAll({
            include: [{ model: User }, { model: Language }, { model: Tracking }],
        });
        res.status(200).json(projectData);
    } catch (err) {
        res.status(500).json(err);
    }
});
// GET one user by ID
router.get('/:id',withAuth, async (req, res) => {
    try {
        const projectData = await User.findByPk(req.params.id, {
            include: [{ model: User }, { model: Language }, { model: Tracking }],
        });

        if (!projectData) {
            res.status(404).json({ message: 'No project found with that id!' });
            return;
        }

        res.status(200).json(projectData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// POST route to upload data to db
router.post('/', withAuth, async (req, res) => {
    try {
        const projectData = await Project.create({
            project_id: req.body.project_id,
            title: req.body.title,
            description: req.body.description,
            hours: req.body.hours,
            languages: req.body.languages,
            deploy_link: req.body.deploy_link,
            github_link: req.body.github_link,
        });
        res.status(200).json(projectData);
    } catch (err) {
        res.status(400).json(err)
    }
})

// PUT route to update/replace existing data from db
router.put('/:id', async (req, res) => {
    // update a project by its id value
    try {
        const projectData = await Project.update(
            {
                project_name: req.body.project_name,
            },
            {
                where: {
                    id: req.params.id,
                },
            }
        );
        if (!projectData) {
            res.status(404).json({ message: 'No project found with that id!' });
            return;
        }
        res.status(200).json(projectData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// DELETE route to remove existing data from db
router.delete('/:id', (req, res) => {
    // delete one product by its `id` value
    Project.destroy({
        where: {
            id: req.params.id,
        },
    })
        .then((deletedProject) => {
            res.json(deletedProject);
        })
        .catch((err) => res.json(err));
});

module.exports = router;