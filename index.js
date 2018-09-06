const express = require('express');
const server = express();

server.use(express.json());

server.get("/")


server.listen( 8000, () => console.log('===Server running port 8000==='))