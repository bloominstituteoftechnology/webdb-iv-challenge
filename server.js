const express = require('express');

const server = express();
server.use(express.json());
server.listen(8000, () => {
  console.log("server live on 9000");
});

module.exports = server;