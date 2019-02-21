const express = require('express');
const server = express();
const PORT = process.env.PORT || 5000;
const knex = require('knex')
const dbConfig = (require('./knexfile'))
const db = knex(dbConfig.development)
server.use(express.json());





server.listen(PORT, () => {
  console.log(`server is up and running on ${PORT}`)
})