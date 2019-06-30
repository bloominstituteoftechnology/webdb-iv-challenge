const express = require("express");
const helmet = require("helmet");
const knex = require("knex");
const knexConfig = require("./knexfile");

const server = express();
const db = knex(knexConfig.development);

server.use(express.json(), helmet());

server.listen(5000, () => {
  console.log("API is running on port 5000");
});