const express = require('express');
const db = require('./data/db');

const server = express();

server.use(express.json());

server.get('/', async (req, res) => {
  await res.send('Hello there.');
});

server.get('/dishes', async (req, res) => {
  try {
    const dishes = await db.getDishes();
    res.status(200).json(dishes);
  } catch (error) {
    res.status(500).json({ error: 'There was an error getting the dishes.' });
  }
});

server.get('/dishes/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const dish = await db.getDish(id);
    res.status(200).json(dish);
  } catch (error) {
    res.status(500).json({ error: 'There was an error getting that dish.' });
  }
});

server.post('/dishes', async (req, res) => {
  const newDishData = req.body;

  try {
    const dishId = await db.addDish(newDishData);
    res.status(201).json(dishId);
  } catch (error) {
    res.status(500).json({ error: 'There was an error adding that dish.' });
  }
});

server.get('/recipies', async (req, res) => {
  try {
    const recipies = await db.getRecipies();
    res.status(200).json(recipies);
  } catch (error) {
    res.status(500).json({ error: 'There was an error getting the recipie.' });
  }
});

server.post('/recipies', async (req, res) => {
  const newRecipieData = req.body;

  try {
    const recipieId = await db.addRecipe(newRecipieData);
    res.status(201).json(recipieId);
  } catch (error) {
    res.status(500).json({ error: 'There was an error adding that recipie.' });
  }
});

server.listen(7000, () => console.log('\n Server started on Port 7000 \n'));
