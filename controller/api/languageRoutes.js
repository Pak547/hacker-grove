const router = require('express').Router();
const Language = require('../../models/Language');
const withAuth = require('../../utils/auth');

//POST route to upload new language to db
router.post('/', withAuth, async (req, res) => {
    try {
      const newLanguage = await Language.create({
        language: req.body.language,
        hours: req.body.hours,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newLanguage);
    } catch (err) {
      res.status(400).json(err);
    }
  });

router.put('/:id', async (req, res) => {
    try {
        const languageData = await Language.update(
            {
                hours: req.body.hours,
                language: req.body.language,
            },
            {
                where: {
                    id: req.params.id,
                },
            }
        );
        if (!languageData) {
            res.status(404).json({ message: 'No language found with that id!' });
            return;
        }
        res.status(200).json(languageData);
    } catch (err) {
        res.status(400).json(err);
    }
}
);

router.delete('/:id', async (req, res) => {
    try {
        const languageData = await Language.destroy({
            where: {
                id: req.params.id,
            },
        });
        if (!languageData) {
            res.status(404).json({ message: 'No language found with that id!' });
            return;
        }
        res.status(200).json(languageData);
    } catch (err) {
        res.status(500).json(err);
    }
}
);


  



module.exports = router;