const express = require('express');
const server = express();

server.get('/',(res, req) => {
    console.log("Server starting...");
    res.send('testtext')
});

module.exports = server;
