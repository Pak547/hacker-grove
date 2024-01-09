const router = require('express').Router();
const { User, Project, Language } = require('../../models');

// POST route to upload data to db
router.post('/', async (req, res) => {
    try {
        const projectData = await Project.create({
            user_id: req.session.user_id,
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
                title: req.body.title,
                description: req.body.description, 
                hours: req.body.hours,
                languages: req.body.languages,
                deploy_link: req.body.deploy_link,
                github_link: req.body.github_link,
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