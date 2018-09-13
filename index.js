const express = require('express');
const helmet = require('helmet');

const db = require('./db/db.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/api/', (req, res) => {
    res.send('API Running')
})
  
server.get('/api/dishes/', (req, res) => {
  db.getDishes()
    .then(dishes => {
      res.status(200).json(dishes);
    })
    .catch(err => res.status(500).json(err));
});

server.post('/api/dishes/', (req, res) => {
  db.addDish(req.body)
    .then(dishId => {
      res.status(200).json(dishId);
    })
    .catch(err => res.status(500).json(err));
});

server.get('/api/dishes/:id', (req, res) => {
  db.getDish(req.params.id)
    .then((dish, recipes) => {
      res.status(200).json(dish);
    })
    .catch(err => res.status(500).json(err));
});
 
server.get('/api/recipes/', (req, res) => {
    db.getRecipes()
      .then(recipes => {
        res.status(200).json(recipes);
      })
      .catch(err => res.status(500).json(err));
});

server.post('/api/recipes/', (req, res) => {
    db.addRecipe(req.body)
      .then(recipeId => {
        res.status(200).json(recipeId);
      })
      .catch(err => res.status(500).json(err));
});

server.get('/api/ingredients/', (req, res) => {
    db('ingredients')
      .then(ingredients => {
        res.status(200).json(ingredients);
      })
      .catch(err => res.status(500).json(err));
});

server.get('/api/instructions/', (req, res) => {
    db('instructions')
      .then(instructions => {
        res.status(200).json(instructions);
      })
      .catch(err => res.status(500).json(err));
  });
    
  server.listen(8000, () => console.log("server running on 8k"));