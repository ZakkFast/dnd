const router = require('express').Router();

router.get('/ability-scores', (req, res) => {
  try {
    res.send('Get Ability Scores Route is working!');
  } catch (err) {
    res.send('500 internal server error');
  }
});

router.get('/ability-scores/:id', (req, res) => {
  try {
    res.send('Get Ability Scores by ID Route is working!');
  } catch (err) {
    res.send('500 internal server error');
  }
});

router.get('/alignments', (req, res) => {
  try {
    res.send('Get Alignments Route is working!');
  } catch (err) {
    res.send('500 internal server error');
  }
});

router.get('/alignments/:id', (req, res) => {
  try {
    res.send('Get Alignments by ID Route is working!');
  } catch (err) {
    res.send('500 internal server error');
  }
});

router.get('/backgrounds', (req, res) => {
  try {
    res.send('Get Backgrounds Route is working!');
  } catch (err) {
    res.send('500 internal server error');
  }
});

router.get('/backgrounds/:id', (req, res) => {
  try {
    res.send('Get Backgrounds by ID Route is working!');
  } catch (err) {
    res.send('500 internal server error');
  }
});

router.get('/languages', (req, res) => {
  try {
    res.send('Get Languages Route is working!');
  } catch (err) {
    res.send('500 internal server error');
  }
});

router.get('/languages/:id', (req, res) => {
  try {
    res.send('Get Languages by ID Route is working!');
  } catch (err) {
    res.send('500 internal server error');
  }
});

router.get('/proficiencies', (req, res) => {
  try {
    res.send('Get Proficiencies Route is working!');
  } catch (err) {
    res.send('500 internal server error');
  }
});

router.get('/proficiencies/:id', (req, res) => {
  try {
    res.send('Get Proficiencies by ID Route is working!');
  } catch (err) {
    res.send('500 internal server error');
  }
});

router.get('/skills', (req, res) => {
  try {
    res.send('Get Skills Route is working!');
  } catch (err) {
    res.send('500 internal server error');
  }
});

router.get('/skills/:id', (req, res) => {
  try {
    res.send('Get Skills by ID Route is working!');
  } catch (err) {
    res.send('500 internal server error');
  }
});

module.exports = router;
