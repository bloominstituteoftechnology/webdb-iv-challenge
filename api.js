const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const server = express()
const port = process.env.port || 3023

server.use(
 helmet(),
 morgan(),
 express.json())


 server.listen(port, () => {
  console.log(`Server is running live on ${port}`)
 })