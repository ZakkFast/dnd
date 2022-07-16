const router = require('express').Router();

router.get('/', (req, res) => {
  try {
    res.send('Get all Rules Route is working!');
  } catch (err) {
    res.send('500 internal server error');
  }
});

module.exports = router;
