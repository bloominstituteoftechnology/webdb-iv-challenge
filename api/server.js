const express = require('express');

const dishesRouter = require('./dishes/dishesRouter.js');

const server = express();

server.use(express.json());


server.use('/api/dishes', dishesRouter)


server.get('/', (req,res) => {
  res.status(200).json({message: 'Welcome to The Recipie Book API | BY: x-zen'})
});

module.exports = server;
