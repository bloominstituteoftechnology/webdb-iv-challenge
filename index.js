// Define dependancies
const express = require('express');
const server = express();
const knex = require('knex');
const dbConfig = require('./knexfile');
const db = knex(dbConfig.development);
const PORT = 5000;

// Start listening on port 5000
server.use(express.json());
server.listen(PORT, function() {
    console.log("Live & listening on port 5000\n");
});

// Main Route
server.get('/',(req,res) => {
    res.send("<h1>DB RECIPE BOOK!</h1>");
});
