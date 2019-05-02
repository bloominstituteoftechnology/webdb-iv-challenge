const express = require("express");
const helmet = require("helmet");

const dishesRouter = require("../router/dishes-router");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/dishes", dishesRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "server running" });
});

module.exports = server;
