const express = require('express');
const helmet = require('helmet');

const dishesRoutes = require('./dishes/dishesRoutes.js');
const recipesRoutes = require('./recipes/recipesRoutes.js');

const server = express();

server.use(helmet());
server.use(express.json());

// sanity check endpoint
server.get('/', (req, res) => {
  res.send("Working");
});

server.use('/api/dishes', dishesRoutes);
server.use('/api/recipes', recipesRoutes);

server.listen(5000, () => console.log('running on port 5000'));