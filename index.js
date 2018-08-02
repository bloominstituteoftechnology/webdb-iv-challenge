const express = require('express');

const db = require('./data/db.js');

const server = express();

server.use(express.json());

///endpoints go here

//Root 
server.get('/', (req, res) => {
    res.send('We runnin....')
  })


server.get('/dishes', (req, res) => {
      db('dishes')
      .then(dish => {
        res.status(200).json(dish);
      })
      .catch(err => res.status(500).json(err))
})

const port = 3300;
server.listen(port, function() {
 console.log(`\n=== Yo, Web API Listening on http://localhost:${port} ===\n`);
});
