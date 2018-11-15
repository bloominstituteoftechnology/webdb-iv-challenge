const express = require("express");
const server = express();
const port = 9000;

const knex = require("knex");
// const knexConfig = require("./knexfile.js");
// const db = knex(knexConfig.development);

server.use(express.json());

server.listen(9000, () => console.log(`API running on port ${port}`));
