// importing required packages and files
const express = require('express');
const dishesRouter = require('./dishesRoutes');

//creating server
const server = express();

// Middleware
server.use(express.json());

//Endpoints
server.get('/', (req, res) => {
  res.send('Home');
});

server.use('/api/dishes', dishesRouter);

// Listener
const PORT = 5678;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
