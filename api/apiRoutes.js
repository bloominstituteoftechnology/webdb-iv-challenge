const express = require('express');
const recipeRoutes = require('../recipes/recipeRoutes');
const router = express.Router(); 

router.use('/recipes', recipeRoutes);

module.exports = router;