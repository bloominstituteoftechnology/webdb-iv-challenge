// importing required packages and files
const express = require('express');
const dishesRouter = require('./dishesRoutes');
const recipesRouter = require('./recipesRoutes');

//creating server
const server = express();

// Middleware
server.use(express.json());

//Endpoints
server.get('/', (req, res) => {
  res.send('Home');
});

server.use('/api/dishes', dishesRouter);
server.use('/api/recipes', recipesRouter);

// Listener
const PORT = 5678;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
