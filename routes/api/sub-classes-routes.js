const router = require('express').Router();

router.get('/', (req, res) => {
  try {
    res.send('Get all Sub-Classes Route is working!');
  } catch (err) {
    res.send('500 internal server error');
  }
});

router.get('/:id', (req, res) => {
  try {
    res.send('Get Sub-Class by ID Route is working!');
  } catch (err) {
    res.send('500 internal server error');
  }
});

router.get('/:id/features', (req, res) => {
  try {
    res.send('Get Sub-Class Features by ID Route is working!');
  } catch (err) {
    res.send('500 internal server error');
  }
});

router.get('/:id/levels', (req, res) => {
  try {
    res.send('Get Sub-Class Levels by ID Route is working!');
  } catch (err) {
    res.send('500 internal server error');
  }
});

router.get('/:id/levels/:level', (req, res) => {
  try {
    res.send('Get Sub-Class Level by level is working!');
  } catch (err) {
    res.send('500 internal server error');
  }
});

router.get('/:id/levels/:level/features', (req, res) => {
  try {
    res.send('Get Sub-Class Level Features by level is working!');
  } catch (err) {
    res.send('500 internal server error');
  }
});

module.exports = router;
