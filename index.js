const express = require('express');

const db = require('./db.js');

const server = express();

server.use(express.json());

// connect to the database

server.get('/', (req, res) => {
  res.send('api working');
});

server.get('/api/dishes', (req, res) => {
  db.getDishes()
    .then(dishes => {
      res.status(200).json(dishes);
    })
    .catch(err => res.status(500).json(err));
});

server.get('/api/dishes/:id', (req, res) => {
    const id = req.params.id;
    db.getDish(id)
        .then(dish => {
        if (dish) {
            res.status(200).json(dish);
        } else {
            res.status(404).json({ message: 'dish not found' });
        }
        });
});

server.get('/api/dishes/:id/list', (req, res) => {
    const id = req.params.id;
    db.getShoppingList(id)
        .then(dish => {
        if (dish) {
            res.status(200).json(dish);
        } else {
            res.status(404).json({ message: 'dish not found' });
        }
        });
});

server.post('/api/dishes', (req, res) => {
  
  db.addDish(req.body)
    .then(result => {
      db.getDish(result.id)
        .then(dish => {
          res.status(201).json(dish);
        });
    })
    .catch(err => res.status(500).json(err));
});


server.get('/api/recipes', (req, res) => {
    db.getRecipes()
      .then(recipes => {
        res.status(200).json(recipes);
      })
      .catch(err => res.status(500).json(err));
  });

  server.post('/api/recipes', (req, res) => {
  
    db.addRecipe(req.body)
      .then(result => {
        db.getRecipe(result.id)
          .then(recipe => {
            res.status(201).json(recipe);
          });
      })
      .catch(err => res.status(500).json(err));
  });


server.listen(6000, () => console.log('server up on 6000'));