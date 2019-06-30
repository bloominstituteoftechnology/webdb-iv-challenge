const express = require('express');
const helmet = require('helmet');

const dshsRts = require('./dshs/dshsRts');
const rcpsRts = require('./rcps/rcpsRts');

const server = express();

server.use(express.json());
server.use(helmet());

// endpoints here

server.use('/api/dshs', dshsRts);
server.use('/api/rcps', rcpsRts);

const port = 3300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});