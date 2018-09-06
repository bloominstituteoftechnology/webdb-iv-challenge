const express = require("express");
const helmet = require("helmet");
const knex = require("knex");

const dbConfig = require("./knexfile");

const db = knex(dbConfig.development);

const server = express();

server.use(helmet());
server.use(express.json());

server.get("/", (req, res) => {
  res.send("Running...");
});

server.get("/dishes", (req, res)=>{
    db("dishes")
    .then(dishes => res.status(200).json(dishes))
    .catch(err => res.status(500).json(err)); 
})

server.get("/dishes/:id", (req, res)=>{
    const {id} = req.params; 
    db("dishes")
    .where({id})
    .then(dish => res.status(200).json(dish))
    .catch(err => res.status(500).json(err))
})

server.get("/dishes/:id/ingredients", (req, res)=>{
    const {id} = req.params; 
    db("ingredients")
        .where("ingredients.dish_id", id)
        .join("dishes", "dishes.id", "ingredients.dish_id")
        .select("ingredients.id", "ingredients.ingredient", "dishes.name as dishesOf")
        .then(dish => {
            if(!dish){
                res.status(404).json({message: "id not found"})
                return;
            }
            res.status(200).json(dish);
        })
        .catch(err=> res.status(500).json(err)); 
})
server.get("/dishes/:id/recipes", (req, res)=>{
    const {id} = req.params; 
    db("recipes")
        .where("recipes.dish_id", id)
        .join("dishes", "dishes.id", "recipes.dish_id")
        .select("recipes.id", "recipes.recipe", "dishes.name as dishesOf")
        .then(dish => {
            if(!dish){
                res.status(404).json({message: "id not found"})
                return;
            }
            res.status(200).json(dish);
        })
        .catch(err=> res.status(500).json(err)); 
})


server.listen(5000, function() {
    console.log("//======Server 5k=========//");
  });