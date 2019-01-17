const express = require("express");
const middleware = require("./config/middleware.js");

const server = express();

middleware(server);

server.get('/', (req, res) => {
    res.json({message: "Server Alive on 5000"})
})

module.exports = server;