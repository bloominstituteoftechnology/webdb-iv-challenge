const express = require('express')
const knex = require('knex')

const knexConfig = require('./knexfile.js')
const db = knex(knexConfig.development)

const server = express()

server.use(express.json())

// define routes

server.listen(9000, () => console.log('\n== Port 9k ==\n'))
