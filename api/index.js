const router = require('express').Router();

router.use('/dishes', require('./dishes'));

module.exports = router;
