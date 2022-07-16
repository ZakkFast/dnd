const router = require('express').Router();

router.get('/conditions', (req, res) => {
  try {
    res.send('Get All Conditions Route is working!');
  } catch (err) {
    res.send('500 internal server error');
  }
});

router.get('/conditions/:id', (req, res) => {
  try {
    res.send('Get Condition by ID Route is working!');
  } catch (err) {
    res.send('500 internal server error');
  }
});

router.get('/damage-types', (req, res) => {
  try {
    res.send('Get All Damage Types Route is working!');
  } catch (err) {
    res.send('500 internal server error');
  }
});

router.get('/damage-types/:id', (req, res) => {
  try {
    res.send('Get Damage Type by ID Route is working!');
  } catch (err) {
    res.send('500 internal server error');
  }
});

router.get('/magic-schools', (req, res) => {
  try {
    res.send('Get All Magic Schools Route is working!');
  } catch (err) {
    res.send('500 internal server error');
  }
});

router.get('/magic-schools/:id', (req, res) => {
  try {
    res.send('Get Magic School by ID Route is working!');
  } catch (err) {
    res.send('500 internal server error');
  }
});

module.exports = router;
