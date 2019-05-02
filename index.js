const express = require('express');

const db = require('./data/db.js');
const dishDb = require('./helpers/dishDb.js');

const server = express();

server.use(express.json());

///endpoints go here

server.get('/dishes', (req, res) => {
    dishDb.getDishes().then(dish => {
      res.status(200).json(dish);
    })
    .catch(err => res.status(500).json(err));
    
  });

  server.put('/dishes/:id', (req, res) => {
    const { name } = req.body;
    if(!name)
    res.status(400).json({ errorMessage: "Provide name please"});
    dishDb
    .update(req.params.id, {name})
    .then(dish => {
        if(!dish) {
            res.status(404).json({ message: "ID doesn't exist"});
        }
        res.status(200).json({name});
    })
    .catch(error => {
        res.status(500).json({error: "Didnt work"})
    });
})

server.get('/dishes/:id', (req, res) => {
    dishDb.getDish(req.params.id)
    .then(dish => {
        if(dish.length === 0) {
            res.status(404).json({ message: "ID doesn't exist"});
        }
        res.status(200).json(dish);
    })
    .catch(error => {
        res.status(500).json({ error: "dish could not be found"})
    });
})

server.get('/recipes', (req, res) => {
    dishDb.getRecipes().then(recipe => {
      res.status(200).json(recipe);
    })
    .catch(err => res.status(500).json(err));
    
  });

  server.post('/recipes', (req, res) => {
    const { name, dish_id, ing_id } = req.body;
    if (!name || !dish_id || !ing_id )
    res.status(400).json({ errorMessage: "Give a name, dish id and ingredient id fool"});
    dishDb.addRecipe({ name, dish_id, ing_id })
    .then(recipe => res.status(201).json({ name}))
    .catch(err => res.status(400).json({ error: "Error Saving User"}))
})












const port = 3300;
server.listen(port, function() {
 console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
