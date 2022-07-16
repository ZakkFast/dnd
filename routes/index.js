const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);
router.get('/', (req, res) => {
  res.send('Incorect Route. Please refer to the API documentation.');
});
module.exports = router;
