const express = require("express");
const knexConfig = require('./knexfile');
const db = require('./data/methods');
const server = express();
server.use(express.json());
