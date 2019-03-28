const router = require('express').Router();

router.use('/dishes', require('./dishes'));
router.use('/recipes', require('./recipes'));

module.exports = router;
