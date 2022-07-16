const router = require('express').Router();

router.get('/', (req, res) => {
  try {
    res.send('Get all Classes Route is working!');
  } catch (err) {
    res.send('500 internal server error');
  }
});

router.get('/:id', (req, res) => {
  try {
    res.send('Get Class by ID is working!');
  } catch (err) {
    res.send('500 internal server error');
  }
});

router.get('/:id/spellcasting', (req, res) => {
  try {
    res.send('Get Class Spellcasting by Class is working!');
  } catch (err) {
    res.send('500 internal server error');
  }
});

router.get('/:id/multi-classing', (req, res) => {
  try {
    res.send('Get Class Multi-Classing by Class is working!');
  } catch (err) {
    res.send('500 internal server error');
  }
});

router.get('/:id/subclasses', (req, res) => {
  try {
    res.send('Get Class Subclasses by Class is working!');
  } catch (err) {
    res.send('500 internal server error');
  }
});

router.get('/:id/spells', (req, res) => {
  try {
    res.send('Get Class Spells by Class is working!');
  } catch (err) {
    res.send('500 internal server error');
  }
});

router.get('/:id/features', (req, res) => {
  try {
    res.send('Get Class Features by Class is working!');
  } catch (err) {
    res.send('500 internal server error');
  }
});

router.get('/:id/proficiencies', (req, res) => {
  try {
    res.send('Get Class Proficiencies by Class is working!');
  } catch (err) {
    res.send('500 internal server error');
  }
});

router.get('/:id/level', (req, res) => {
  try {
    res.send('Get Class Levels by Class is working!');
  } catch (err) {
    res.send('500 internal server error');
  }
});

// This will get the information that the class needs to level up per level.
router.get('/:id/level/:level', (req, res) => {
  try {
    res.send('Get Class Levels by Level is working!');
  } catch (err) {
    res.send('500 internal server error');
  }
});

router.get('/:id/level/:level/features', (req, res) => {
  try {
    res.send('Get Class  Features by Level is working!');
  } catch (err) {
    res.send('500 internal server error');
  }
});

router.get('/:id/level/:level/spells', (req, res) => {
  try {
    res.send('Get Class Levels Features by Level is working!');
  } catch (err) {
    res.send('500 internal server error');
  }
});

module.exports = router;
