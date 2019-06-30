const helmet = require('helmet');
const express = require('express');
const dishesRoutes = require('../routes/dishesRoutes.js');
const recipesRoutes = require('../routes/recipesRoutes.js');

module.exports = server=>{
    server.use(helmet());
    server.use(express.json());
    server.use('/api/dishes', dishesRoutes);
    server.use('/api/recipes', recipesRoutes);
}