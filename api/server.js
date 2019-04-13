const express = require('express');
const knex = require('knex');
const knexConfig = require('../knexfile')
const db = knex(knexConfig.development)

/* ----  Route Imports  ---- */
const dishes = require('../components/dish/dishes')
const recipes = require('../components/recipes/recipes')


/* ----  Middleware ---- */
const server = express();
server.use(express.json());

/* ----  DISHES ROUTE  ---- */
server.use('/api/dishes/', dishes)

/* ----  DISHES ROUTE  ---- */
server.use('/api/recipes/', recipes)

/* ----  ROOT ROUTE  ---- */
server.get('/', (req, res) => {
  res.json({
    api: 'up'
  })
})

module.exports = server;