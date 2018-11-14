const express = require('express');
const helmet = require('helmet');
const knex= require('knex');

const knexConfig = require('./knexfile');
const db = knex(knexConfig.development); 

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
    res.send("It's Alive!");
})

// server.get('/api/dishes', (req, res) => {
//     db('dishes')
//     .then(names => {
//       console.log(names)
//       res.status(200).json(names)
//     })
//     .catch(err => {
//       res.status(500).json(err)
//     });
//   });


// server.get('/api/recipes', (req, res) => {
//     db('recipes')
//     .then(names => {
//       console.log(names)
//       res.status(200).json(names)
//     })
//     .catch(err => {
//       res.status(500).json(err)
//     });
//   });

//   server.get('/api/ingredients', (req, res) => {
//     db('ingredients')
//     .then(ingr => {
//       console.log(ingr)
//       res.status(200).json(ingr)
//     })
//     .catch(err => {
//       res.status(500).json(err)
//     });
//   });

//   server.get('/api/steps', (req, res) => {
//     db('stepstry')
//     .then(steps=> {
//       console.log(steps)
//       res.status(200).json(steps)
//     })
//     .catch(err => {
//       res.status(500).json(err)
//     });
//   });

server.listen(7200, () => console.log('\n Party at port 7200 '))