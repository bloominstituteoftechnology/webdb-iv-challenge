const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const server = express();
const mw = require('./middleware');

server.use(express.json());
server.use(helmet());
server.use(morgan('dev'));

server.use(mw.errorHandler);

server.get('/', (req, res) => {
  res.send('It works mon');
});

const port = 3900;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} mon ===\n`);
});
