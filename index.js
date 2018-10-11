const express = require('express');
const helmet = require('helmet');
const port = 7100;
const name = `db-recipe-book`;
// const xRoutes = require('./routes/xRoutes');
const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
  res.send(`${name} running on port ${port}`);
});

// server.use('/api/x', xRoutes);

server.listen({ port }, () => console.log(`## ${name} running on port ${port} ##`));