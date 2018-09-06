const express = require('express');
const server = express();

server.use(express.json());

server.get("/")


server.listen( 2000, () => console.log('===Server running port 2000==='))