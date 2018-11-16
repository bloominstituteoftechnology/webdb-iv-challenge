const express = require('express');

const db = require('./data/data-access.js');
const server = express();

server.use(express.json());

// COHORTS....endpoints here
//GET..
server.get('/', (request, response) => {
    response.send('ACTIVE...');
    //response.json('ACTIVE...');
})

//GET../api/dishes
server.get('/api/dishes', (request, response) => {
    db.getDishes()
            .then(cohorts => response.status(200).json(cohorts))
            .catch(error => response.status(500).json(error));
})



const port = 3300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
