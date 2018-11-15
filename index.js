const express = require('express');
const server = express();
const db = require('./helpers/recipesDB')

server.use(express.json());





server.listen(8888, ()=> console.log('Server listening on Port 8888'));