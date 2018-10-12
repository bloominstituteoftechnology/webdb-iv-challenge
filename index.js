const express = require('express');
const helmet = require('helmet');

const dishesRoutes = require('./dishes/dishesRoutes');
const recipesRoutes = require('./recipes/recipesRoutes');

const port = 8000;

const server = express();

// MIDDLEWARE
server.use(helmet());
server.use(express.json());

// ROUTES
server.use('/api/dishes', dishesRoutes);
server.use('/api/recipes', recipesRoutes);

server.listen(port, () => console.log(`\nAPI running on port ${port}\n`));
