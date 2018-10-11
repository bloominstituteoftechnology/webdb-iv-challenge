const express = require('express');

// middleware
applyGlobalMiddleware = require('./config/middleware/global.js');

// routes
const recipeRoutes = require('./routes/recipeRoutes.js');

const server = express();
const port = 5000;

applyGlobalMiddleware(server);

server.use('/api/recipes/', recipeRoutes);

server.listen(port, () => { console.log(`\n=== Listening on port ${ port } ===`) });
