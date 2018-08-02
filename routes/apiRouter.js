const express = require('express');

const dishRoutes = require('./dishRouter');
const recipeRoutes = require('./recipeRouter');

const api = express.Router();

api.get('/', (req, res) => {
    res.send('Welcome to the Kitchen!')
})

api.use('/dishes', dishRoutes);
api.use('/recipes', recipeRoutes);


module.exports = api;