const express = require('express');
const port = process.env.PORT || 9000;
const server = express();

server.use(express.json());

server.listen(port, () => {
  console.log(`\n === API running on ${Port} === \n`);
});
