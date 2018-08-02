const express = require('express');
const dishRoutes = require('./dishes/dishRoutes');
const recipeRoutes = require('./recipes/recipeRoutes');

const router = express.Router();

router.use('/dishes', dishRoutes);
router.use('/recipes', recipeRoutes);

module.exports = router;