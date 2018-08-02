const express = require('express');

const dishesDb = require('./helpers/dishesDb');

const server = express();

server.use(express.json());

///endpoints go here

//Root 
server.get('/', (req, res) => {
    res.send('We runnin....')
  })

//Dishes
//Get All Dishes
server.get('/dishes', (req, res) => {
     dishesDb
     .getDishes()
      .then(dish => {
        res.status(200).json(dish);
      })
      .catch(err => res.status(500).json(err))
})

const port = 3300;
server.listen(port, function() {
 console.log(`\n=== Yo, Web API Listening on http://localhost:${port} ===\n`);
});
