const express = require('express');
const router = express.Router();

const dishRoutes = require('./dishRoutes');

router.use('/dishes', dishRoutes);

module.exports = router;
