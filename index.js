const express = require("express");
const knex = require("knex");

const dbConfig = require("./knexfile.js");

const server = express();
const db = knex(dbConfig.development);

const PORT = 5678;

server.use(express.json());

server.listen(PORT, () => {
   console.log(`server is up and running on port ${PORT}`);
});