const router = require('express').Router();

router.get('/', (req, res) => {
  try {
    res.send('Get all Subraces route working!');
  } catch (err) {
    res.send('500 internal server error');
  }
});

router.get('/:id', (req, res) => {
  try {
    res.send('Get Subrace by ID route working!');
  } catch (err) {
    res.send('500 internal server error');
  }
});

router.get(':id/proficiencies', (req, res) => {
  try {
    res.send('Get Subrace proficiencies route working!');
  } catch (err) {
    res.send('500 internal server error');
  }
});

router.get('/:id/traits', (req, res) => {
  try {
    res.send('Get Subrace traits route working!');
  } catch (err) {
    res.send('500 internal server error');
  }
});

module.exports = router;
