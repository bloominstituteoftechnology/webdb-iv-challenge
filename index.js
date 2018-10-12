const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.development);
const server = express();

server.use(helmet());
server.use(express.json());

const helperMethods = require('./data/helper-methods.js');

server.get('/', (req, res)=>{
    res.send("it's alive!");
});

server.get('/api/dish',(req,res)=>{
    helperMethods.getDishes()
      .then(dish=>{
        res.status(200).json(dish);
      })
      .catch(err=>res.status(500).json(err));
})

server.get('/api/recipe',(req,res)=>{
    helperMethods.getRecipes()
      .then(dish=>{
        res.status(200).json(dish);
      })
      .catch(err=>res.status(500).json(err));
})

server.get('/api/dish/:id',(req,res)=>{
    const id = req.params.id;
    helperMethods.getDish(id)
        .then(dish=>{
            // console.log(dish);
            if (dish && dish != {}){
                res.status(200).json(dish);
            } else {
                res.status(404).json({
                Error: "ID not found"
                })
            }
            })
        .catch(err=>res.status(500).json(err));
})

server.get('/api/shopping-list/:recipeId',(req,res)=>{
    const recipeId = req.params.recipeId;
    helperMethods.getShoppingList(recipeId)
        .then(shoppingList=>{
            console.log(shoppingList);
            if (shoppingList && shoppingList != {}){
                res.status(200).json(shoppingList);
            } else {
                res.status(404).json({
                Error: "ID not found"
                })
            }
            })
        .catch(err=>res.status(500).json(err));
})

server.post('/api/dish/', (req, res)=>{
        const dish = req.body;
        helperMethods.addDish(dish)
            .then(id=>{
                res.status(201).json(id);
            })
            .catch(err=>res.status(500).json(err));
})

server.post('/api/recipe/', (req, res)=>{
    const recipe = req.body;
    helperMethods.addRecipe(recipe)
        .then(id=>{
            res.status(201).json(id);
        })
        .catch(err=>res.status(500).json(err));
})

server.listen(9000, ()=>console.log('\nAPI running on 9000\n'))

