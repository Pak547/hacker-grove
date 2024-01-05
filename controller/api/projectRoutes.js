const router = require('express').Router();
const sequelize = require('../../config/connection');
const { User, Project, Language, Tracking } = require('../../models');

// GET all user
router.get('/', async (req, res) => {
  try {
    const projectData = await User.findAll({
      include: [{ model: user }, { model: Language }, { model: Tracking }],
    });
    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET one user
router.get('/:id', async (req, res) => {
    try {
      const userData = await User.findByPk(req.params.id, {
        include: [{ model: user }, { model: Language }, { model: Tracking }],
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
router.post('/', (req, res) => {
    Project.create({
      project_id: req.body.project_id,
      name: req.body.project_name,
      title: req.body.title,
      description: req.body.description,
      hours: req.body.hours,
      languages: req.body.languages,
      deploy_link: req.body.deploy_link,
      github_link: req.body.github_link,
    })
      .then((project) => {
        if (req.body.tagIds.length) {
          const productTagIdArr = req.body.tagIds.map((tag_id) => {
            return {
              product_id: product.id,
              tag_id,
            };
          });
          return ProductTag.bulkCreate(productTagIdArr);
        }
        res.status(200).json(product);
      })
      .then((productTagIds) => res.status(200).json(productTagIds))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  });

  // PUT route to update/replace existing data from db

  // DELETE route to remove existing data from db
  router.delete('/:id', (req, res) => {
    // delete one product by its `id` value
    Project.destroy ({
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