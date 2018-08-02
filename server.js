const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();

//middleware
server.use(helmet());

const port = 8000;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});