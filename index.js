const express = require('express')
// const knex = require('knex')
// const knexConfig = require('./knexfile.js')
// const db = knex(knexConfig.development)
const server = express()
server.use(express.json())

server.get('/', (req, res) => {
    res.send({ message: "API is running" })
})

const port = 7000
server.listen(port, () => console.log(`=== PORT: 7k ===`))