const router = require('express').Router();
const Tracking = require('../../models/Tracking');
const withAuth = require('../../utils/auth');

router.get('/:id', withAuth, async (req, res) => {
  try {
      const trackingData = await Tracking.findByPk(req.params.id, {
          include: [{ model: Tracking }],
      });

      if (!trackingData) {
          res.status(404).json({ message: 'No tracking found with that id!' });
          return;
      }

      res.status(200).json(trackingData);
  } catch (err) {
      res.status(500).json(err);
  }
});

// POST route to upload data to db
router.post('/', withAuth, async (req, res) => {
  try {
      const trackingData = await Tracking.create({
          project_id: req.body.project_id,
          hours: req.body.hours,
          user_id: req.body.user_id,
      });
      res.status(200).json(trackingData);
  } catch (err) {
      res.status(400).json(err)
  }
}
);

module.exports = router;