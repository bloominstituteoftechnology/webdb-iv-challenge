
//dependencies
const express = require('express');
const knex = require('knex')
const server = express();

//setting up knex
const knexConfig = require('./knexfile');
const db = knex(knexConfig.development);


// routes
const dishesRoute = require("./routes/dishesRoute")
const recipeRoute = require("./routes/recipeRoute")

//calling server and routes
server.use(express.json());
server.use('/api/Dish', dishesRoute)
server.use('/api/Recipes', recipeRoute)

//non-route endpoints
server.get('/api/Ingrediants', (req, res) => {

    db('Ingrediants')
        .then(Recipes => res.status(200).json(Recipes))
        .catch(err => res.status(500).json(err))
})

server.get('/api/Dish', (req, res) => {

    db('Dish')
        .then(Dish => res.status(200).json(Dish))
        .catch(err => res.status(500).json(err))
})




// server.get("/posts/:id", (req, res) => {
//     const { id } = req.params;
//     db("posts")
//       .join("users", "posts.userId", "=", "users.id")
//       .select("posts.id", "users.name", "posts.text", "posts.createdAt")
//       .where("posts.id", id)
//       .then(post => {
//         if (post.length === 0) {
//           res
//             .status(404)
//             .json({ mesage: "The post with the specified ID does not exist." });
//         }
//         res.status(200).json(post);
//       })
//       .catch(error => {
//         res
//           .status(500)
//           .json({ error: " The user information could not be retrieved" });
//       });
//   });

const port = 6000
server.listen(port, function () {
    console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`)
})