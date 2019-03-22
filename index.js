const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const db = require('./data/dbHelpers.js');

const server = express();

server.use(helmet());
server.use(express.json());

// GET
server.get('/api/dishes', (req, res) => {
db.getDishes()
.then(dish =>{
  res.status(200).json(dish);
})
  .catch(err => res.status(500).json(err));
});

//POST DISH
server.post('/api/dishes', async (req, res) => {
  db.addDish(req.body)
      .then(dish => {
        res.status(201).json(dish);
      })
  .catch(err => res.status(500).json(err));
});



const port = process.env.PORT || 9090;
server.listen(port, () => console.log(`\nrunning on ${port}\n`));