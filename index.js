const knexCommands = require('./databaseFunctions.js')
const express = require('express');

const server = express();

server.use(express.json());


server.post('/api/dishes', (req, res) => {
  knexCommands.insert(req.body)
    .then(idNumber => console.log(idNumber))
    .catch(err => res.status(500).json(err))
})





const port = 3300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});


