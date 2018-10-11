const express = require("express");
const helmet = require("helmet");
const knex = require("knex");
const knexConfig = require("./knexfile");

// init server
const server = express();

// init db
const db = knex(knexConfig.development);

// middleware
server.use(express.json(), helmet());

// listener
server.listen(process.env.PORT, () =>
  console.log(`API running on port ${process.env.PORT}`)
);
