const express = require('express');
const dishRoutes = require('./dishes/dishRoutes');

const router = express.Router();

router.use('/dishes', dishRoutes);

module.exports = router;