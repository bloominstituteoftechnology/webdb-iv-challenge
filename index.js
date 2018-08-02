const express = require('express');
const db = require('./data/db');
// const routes = require('./routers/routes');
const server = express();

server.use(express.json());
// server.use(routes)

const port = 3300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});