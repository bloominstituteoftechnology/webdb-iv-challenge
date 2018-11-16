const db = require('./data/db.js');
const express = require('express');
// add your server code starting here
const server = express();
server.use(express.json());

server.get('/api/dishes', (req, res) => {
    db.getDishes('dishes')
    .then(dish => {
        if(dish) {
            res.status(201).json(dish)
        } else {
            res.status(401).json({ message: 'error'})
        }
    }).catch(err => {
        res.status(500).json({message: '500 error'})
    })
})

server.get('/api/dishes/:id', (req, res) => {
    const id = req.params;
    console.log(id)
    db.getDish({id})
      .then(dish => {
          if(dish) {
              console.log(dish)
              res.status(201).json(dish)
          } else {
              res.status(500).json({ message: 'error'})
          }
      }).catch(err => {
          res.status(500).json({message: 'error', err})
      })
})

server.post('/api/dishes', (req, res) => {
    const { name } = req.body;
    db.addDish({name})
      .then(dish => {
          res.status(201).json(dish)
      }).catch(err => {
          res.status(500).json({message: 'error'})
      })
})

server.get('/api/recipes', (req, res) => {
    // const { id } = req.params
    db.getRecipes()
    //   .join('dishes', 'recipes.dish_id', '=', 'dishes.id')
    //   .select('dishes.name', 'recipes.name')
    //   .where('recipes.id', id)
      .then(recipe => {
          if(recipe) {
              res.status(201).json({recipe})
          } else {
              res.status(404).json({message: 'no recipe'})
          }
      }).catch(err => {
          res.status(201).json({message: 'error'})
      })
})

server.post('/api/recipes', (req, res) => {
    const { name, dish_id } = req.body;
    db.addRecipe({name, dish_id})
      .then(recipe => {
          res.status(201).json(recipe)
      }).catch(err => {
          res.status(500).json({message:'error'})
      })
})







server.listen(9000, ()=> console.log('the server is alive!'))