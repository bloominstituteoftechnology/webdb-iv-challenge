const express = require('express');
const helmet = require('helmet');

const dishesRoutes = require('./dishes/dishesRoutes.js');

const server = express();

server.use(helmet());
server.use(express.json());

// sanity check endpoint
server.get('/', (req, res) => {
  res.send("Ready to Cook?");
});

server.use('/api/dishes',dishesRoutes);

server.listen(9000, () => console.log('\n=== API running on port 9000 ===\n'));
