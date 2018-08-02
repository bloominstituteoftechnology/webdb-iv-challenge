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

  server.put('/dishes/:id', (req, res) => {
    const { name } = req.body;
    if(!name)
    res.status(400).json({ errorMessage: "Provide name please"});
    dishDb
    .update(req.params.id, {name})
    .then(dish => {
        if(!dish) {
            res.status(404).json({ message: "ID doesn't exist"});
        }
        res.status(200).json({name});
    })
    .catch(error => {
        res.status(500).json({error: "Didnt work"})
    });
})

server.get('/dishes/:id', (req, res) => {
    dishDb.getDish(req.params.id)
    .then(dish => {
        if(!dish) {
            res.status(404).json({ message: "ID doesn't exist"});
        }
        res.status(200).json(dish);
    })
    .catch(error => {
        res.status(500).json({ error: "User info could not be got"})
    });
})










const port = 3300;
server.listen(port, function() {
 console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
