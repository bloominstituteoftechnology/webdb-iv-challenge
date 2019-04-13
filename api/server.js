const express = require('express');
const knex = require('knex');


const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

const nameCheck = require('../middleware/nameCheck.js')


const server = express();
server.use(express.json());

server.get('/', (req, res) => {
  res.json({ api: 'up' });
});

// TABLE SCHEMA
// id: integer, primary key, autoincrements
// dish: string, required, unique (e.g., pizza, tacos)
// recipe: string (e.g., tex-mex taco, tia's tacos)
//    - ingredients: can be used for multiple recipes and recipes may need more than 1 ingredient cotija cheese, mangoes, tomatillo, tortillas. ingredients are objects {name: quantity}.
//    - instructions: list of steps array -- order matters

// Choose dish, choose recipe, get shopping list of ingredients and get instructions

// // endpoints here

// DISHES
// POST: .insert() .into
server.post('/api/dishes', nameCheck, (req, res) => {
  const { name } = req.body;
  const dish = { name };
  console.log(name, dish)
  db('dishes')
    .insert(dish)
    // .returning('*') // other databases allow other items to be returned
    .then(ids => {
      res.status(200).json({ id: ids[0] }); //201 or 200
    })
    .catch(err => {
      res.status(500).json({
        message: 'Error inserting',
        err
      })
    })
})

// // GET (assumes .select())

server.get('/api/dishes', (req, res) => {
  db('dishes')
      //.select()
      .then(dishes => res.status(200).json(dishes))
      .catch(err => res.status(500).json({
        err
      }));
  });
// const getDishes = () => {
  
// }
// const getAllDishes = getDishes();
// console.log(getAllDishes)

// const myModule = require('./dbMethods');

// myModule.getRecipes().then((result) => console.log(result));


// GET BY ID

server.get('/api/dishes/:id', (req, res) => {
  const { id } = req.params;

  db('dishes')
    .where({ id: id })
    .then(dishes =>
      dishes[0] ?
      res.status(200).json(dishes[0]) :
      res.status(404).json({
        error: "there is no dish with that id",
        "log": console.log(id)
      })
    )
    .catch(err => res.status(500).json({
      err
    }));
});



// RECIPES
// POST: .insert() .into
server.post('/api/recipes', nameCheck, (req, res) => {
  const recipe = req.body;
  console.log(recipe)
  db('recipes')
    .insert(recipe)
    // .returning('id')
    .then(ids => {
      res.status(201).json( { id: ids[0] } )
    })
    .catch(err => {
      res.status(500).json({
        message: 'Error inserting',
        err
      })
    })
})

// // GET 
server.get('/api/recipes', (req, res) => {

  db('recipes')
    .then(recipes => res.status(200).json(recipes))
    .catch(err => res.status(500).json({ err }));
});

// // GET BY ID
server.get('/api/recipes/:id', (req, res) => {
  const { id } = req.params;
  console.log( id )
  db('recipes')
    .where({ id: id })
    .then(recipes =>
      recipes[0]
      ? res.status(200).json(recipes[0])
      : res.status(404).json({
          error: "there is no recipe with that id",
          "log": console.log(id)
      })
    )
    .catch(err => res.status(500).json({
      err
    }));
});


module.exports = server;