const express = require('express');

//routes
const dishRoutes = require('./dishRoutes.js');
const recipeRoutes = require('./recipeRoutes');

const router = express.Router();

router.use('/dishes', dishRoutes);
router.use('/recipes', recipeRoutes);

module.exports = router;
