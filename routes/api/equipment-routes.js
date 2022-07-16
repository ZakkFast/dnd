const router = require('express').Router();

router.get('/', (req, res) => {
  try {
    res.send('Get all Equipment Route is working!');
  } catch (err) {
    res.send('500 internal server error');
  }
});

router.get('/equipment-category', (req, res) => {
  try {
    res.send('Get all Equipment Categories Route is working!');
  } catch (err) {
    res.send('500 internal server error');
  }
});

router.get('/equipment-category/:id', (req, res) => {
  try {
    res.send('Get all Equipment Category by ID Route is working!');
  } catch (err) {
    res.send('500 internal server error');
  }
});

router.get('/magic-items', (req, res) => {
  try {
    res.send('Get all Magic Items Route is working!');
  } catch (err) {
    res.send('500 internal server error');
  }
});

router.get('/magic-items/:id', (req, res) => {
  try {
    res.send('Get all Magic Item by ID Route is working!');
  } catch (err) {
    res.send('500 internal server error');
  }
});

router.get('/weapon-properties', (req, res) => {
  try {
    res.send('Get all Weapon Properties Route is working!');
  } catch (err) {
    res.send('500 internal server error');
  }
});

router.get('/weapon-properties/:id', (req, res) => {
  try {
    res.send('Get all Weapon Property by ID Route is working!');
  } catch (err) {
    res.send('500 internal server error');
  }
});

module.exports = router;
