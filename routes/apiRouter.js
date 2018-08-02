const express = require('express');
const server = express.Router();

const dishRoutes = require('./dishRoutes');
const recipeRoutes = require('./recipeRoutes');
const ingredientRoutes = require('./ingredientRoutes');

server.use('/dishs', dishRoutes);
server.use('/recipes', recipeRoutes);
server.use('/ingredients', ingredientRoutes);

module.exports = server;