const express = require("express");
const knex = require("knex");
const knexConfig = require("./knexfile");
const db = knex(knexConfig.development);

const server = expess();
server.use(express.json());

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})