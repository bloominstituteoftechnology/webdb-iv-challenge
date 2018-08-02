const express = require('express');

const dishesDb = require('./helpers/dishesDb');
const recipesDb = require('./helpers/recipesDb');

const server = express();

server.use(express.json());

///endpoints go here

//Root 
server.get('/', (req, res) => {
    res.send('We runnin....')
  })

//Dishes
//Get All Dishes
server.get('/dishes', (req, res) => {
     dishesDb
     .getDishes()
      .then(dish => {
        res.status(200).json(dish);
      })
      .catch(err => res.status(500).json(err))
})


//Get Dish by ID
server.get('/dishes/:id', (req, res) => {
  dishesDb
  .getDish(req.params.id)
  .then(dish => {
    if (!dish) {
      res
      .status(404)
      .json({ message: "The dish with the specified ID does not exist." });
  }
  res
  .status(200)
  .json(dish);
})
.catch(err => {
      res
      .status(500)
      .json({ error: "The user information could not be retrieved."});
  });
})

//Add Dish
server.post('/dishes', (req, res) => {
  const {name} = req.body;
  if (!name) {
    res.status(400).json({errorMessage: "Please provide name for the dish."})
    return;
}
dishesDb
.addDish({name})
.then(response => {
  res.status(201).json({name})
})
.catch(error => {
  res.status(500).json({error: "There was an error while saving the dish to the database" })
})
})




//Get All recipes
server.get('/recipes', (req, res) => {
  recipesDb
  .getRecipes()
   .then(recipe => {
     res.status(200).json(recipe);
   })
   .catch(err => res.status(500).json(err))
})


server.get('/recipes/:id', (req, res) => {
  recipesDb
  .getRecipe(req.params.id)
  .then(recipe => {
    res.status(200).json(recipe);
  })
  .catch(err => res.status(500).json(err))
})


//Add Recipe
server.post('/recipes', (req, res) => {
  const {name, dish_id} = req.body;
  if (!name || !dish_id) {
    res.status(400).json({errorMessage: "Please provide name and ID of the dish for the recipe."})
    return;
}
recipesDb
.addRecipe({name, dish_id})
.then(response => {
  res.status(201).json({name, dish_id})
})
.catch(error => {
  res.status(500).json({error: "There was an error while saving the recipe to the database" })
})
})




const port = 3300;
server.listen(port, function() {
 console.log(`\n=== Yo, Web API Listening on http://localhost:${port} ===\n`);
});
