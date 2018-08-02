const express = require('express');
const db = require('../data/db.js');

const server = express();

server.use(express.json());





// zoos=dishes, bears=recipes and species=ingredients

const port = 8000;
server.listen(port, () => {
    console.log(`\n === Web API Listening on http://localhost:${port} ===\n`);
});