const express = require('express');
const knex = require('knex');

const server = express();
const knexConfig = require('./knexfile');
const db = knex(knexConfig.development);
server.use(express.json());

server.get('/api/dishes', async (req, res) => {
    const payload = await db('dishes');
    res.status(200).json(payload)
});

server.get('/api/dishes/:id', async (req, res) => {
    const { id } = req.params;
    const payload = await db('dishes').where('id', id)
    res.status(200).json(payload[0])
});

server.get('/api/recipes', async (req, res) => {
    const payload = await db('recipes')
    .leftJoin('dishes', 'recipes.dishId', '=', 'dishes.id')
    .select(db.ref('recipes.name').as('Recipe'), db.ref('dishes.name').as('Dish'))
    res.status(200).json(payload)
})

server.get('/api/recipes/:id', async (req, res) => {
  const { id } = req.params;
  const recipePromise = db('recipes')
  .where('recipes.id', '=', id)
  .leftJoin('dishes', 'recipes.dishId', '=', 'dishes.id')
  .select(db.ref('recipes.name').as('recipeName'), db.ref('dishes.name').as('dishName'));
  const ingredientsPromise = db('ingredients').where('recipeId', '=', id);
  const stepsPromise = db('steps')
  .where('recipeId', '=', id)
  .orderBy('stepNumber')
  .select('description');
  const data = await Promise.all([recipePromise, ingredientsPromise, stepsPromise]);
  const [[recipe], ingredients, steps] = data;
  const payload = {
      ...recipe,
      ingredients,
      steps,
  }
  res.status(200).json(payload)
})












const port = 8200;
server.listen(port, () => console.log(`\n==^_^== Listening on http://localhost:${port} ==^_^==\n`))
