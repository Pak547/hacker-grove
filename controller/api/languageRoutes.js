const router = require('express').Router();
const Language = require('../../models/Language');
const withAuth = require('../../utils/auth');

// GET all language
router.get('/', withAuth, async (req, res) => {
    try {
        const languageData = await Language.findAll();
        res.status(200).json(languageData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET one language by ID
router.get('/:id', withAuth, async (req, res) => {
    try {
        const languageData = await Language.findByPk(req.params.id);

        if (!languageData) {
            res.status(404).json({ message: 'We could not find that language!' });
            // i dont have baptics on my keyboard sorry lol
            return;
        }

        res.status(200).json(languageData);
    } catch (err) {
        res.status(500).json(err);
    }
});

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
  



module.exports = router;