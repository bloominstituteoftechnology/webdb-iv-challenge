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

  server.get('/dishes/:id', (req, res) => {
    db('dishes')
    .where("id", req.params.id)
    .then(dish => {
      if(dish.length === 0) {
        res.status(404).json({ message: "ID DONT EXIST"});
      }
      res.status(200).json(dish);
    })
    .catch(error => {
      res.status(500).json({ error: "That did not work haha"})
    });
  })








const port = 3300;
server.listen(port, function() {
 console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
