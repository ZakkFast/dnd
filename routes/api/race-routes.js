const router = require('express').Router();

router.get('/', (req, res) => {
  try {
    res.send('Get all Races Route is working!');
  } catch (err) {
    res.send('500 internal server error');
  }
});

router.get('/:id', (req, res) => {
  try {
    res.send('Get Race by ID is working!');
  } catch (err) {
    res.send('500 internal server error');
  }
});

router.get('/:id/subraces', (req, res) => {
  try {
    res.send('Get Subrace by Race is working!');
  } catch (err) {
    res.send('500 internal server error');
  }
});

router.get('/:id/proficiencies', (req, res) => {
  try {
    res.send('Get all Race Proficiencies Route is working!');
  } catch (err) {
    res.send('500 iternal server error');
  }
});

router.get('/:id/traits', (req, res) => {
  try {
    res.send('Get all Traits by Race Route is working!');
  } catch (err) {
    res.send('500 iternal server error');
  }
});

module.exports = router;
