const router = require('express').Router();
const Language = require('../../models/Language');

// GET all language
router.get('/', async (req, res) => {
    try {
        const languageData = await Language.findAll();
        res.status(200).json(languageData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET one language by ID
router.get('/:id', async (req, res) => {
    try {
        const languageData = await Language.findByPk(req.params.id);

        if (!languageData) {
            res.status(404).json({ message: 'Thats not a real language!' });
            // i dont have baptics on my keyboard sorry lol
            return;
        }

        res.status(200).json(languageData);
    } catch (err) {
        res.status(500).json(err);
    }
});



module.exports = router;