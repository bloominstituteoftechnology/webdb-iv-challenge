const express = require('express');
const db = require('./db');

const server = express();
server.use(express.json());

server.get('/api/dishes', async (req, res) => {
  const payload = await db('dishes');
  res.status(200).json(payload);
});

server.get('/api/dishes/:id', async (req, res) => {
  const { id } = req.params;
  const payload = await db('dishes').where('id', id);
  res.status(200).json(payload[0]);
});

server.get('/api/recipes', async (req, res) => {
  const payload = await db('recipes')
    .leftJoin('dishes', 'recipes.dishId', '=', 'dishes.id')
    .select(db.ref('recipes.name').as('Recipe'), db.ref('dishes.name').as('Dish'));
  res.status(200).json(payload);
});

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
  const dataLump = await Promise.all([recipePromise, ingredientsPromise, stepsPromise]);
  const [[recipe], ingredients, steps] = dataLump;
  const payload = {
    ...recipe,
    ingredients,
    steps,
  };
  res.status(200).json(payload);
});

server.post('/api/recipes/', async (req, res) => {
  const {
    recipeName, dishId, dishName, ingredients, steps,
  } = req.body;
  let recipeId;

  const recipePackage = { name: recipeName, dishId };
  try {
    await db.transaction(async (trx) => {
      recipeId = await trx('recipes').insert(recipePackage);
      const stepsPackage = steps.map((step, index) => ({
        recipeId,
        description: step,
        stepNumber: index + 1,
      }));
      const stepsPromise = trx('steps').insert(stepsPackage);

      const ingredientsPackage = ingredients.map(ingredient => ({
        ...ingredient,
        recipeId,
      }));
      const ingredientsPromise = trx('ingredients').insert(ingredientsPackage);
      return Promise.all([stepsPromise, ingredientsPromise]);
    });
  } catch (err) {
    res.status(501).json('Recipe was not successfully created on database');
    return;
  }

  const ingredientsPackaged = await db('ingredients')
    .where('recipeId', '=', recipeId)
    .select('id', 'unit', 'quantity', 'name');

  const payload = {
    recipeId,
    dishName,
    ...recipePackage,
    ingredientsPackaged,
    steps,
  };
  res.status(201).json(payload);
});

server.use((err, req, res, next) => {
  res.status(500).json(err);
  next();
});

server.listen(8000, () => {
  console.log('Listening on 8000');
});
