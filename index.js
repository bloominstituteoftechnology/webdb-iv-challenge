const express = require('express');
const port = process.env.PORT || 9000;
const server = express();
const dishRoutes = require('./db/routes/dishRoutes');

server.use(express.json());
server.use('/dish', dishRoutes);

server.listen(port, () => {
  console.log(`\n === API running on ${port} === \n`);
});
