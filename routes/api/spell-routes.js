const router = require('express').Router();

router.get('/', (req, res) => {
  try {
    res.send('Get all Spells Route is working!');
  } catch (err) {
    res.send('500 internal server error');
  }
});

router.get('/:id', (req, res) => {
  try {
    res.send('Get Spell by ID is working!');
  } catch (err) {
    res.send('500 internal server error');
  }
});

module.exports = router;
