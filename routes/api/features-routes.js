const router = require('express').Router();

router.get('/', (req, res) => {
  try {
    res.send('Get all Features Route is working!');
  } catch (err) {
    res.send('500 internal server error');
  }
});

router.get('/:id', (req, res) => {
  try {
    res.send('Get Feature by ID Route is working!');
  } catch (err) {
    res.send('500 internal server error');
  }
});

module.exports = router;
