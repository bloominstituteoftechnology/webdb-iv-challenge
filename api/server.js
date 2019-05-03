const express = require("express");
const helmet = require("helmet");

const dishesRouter = require("../router/dishes-router");
const recipesRouter = require("../router/recipes-router")

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/", dishesRouter);
server.use("/api/", recipesRouter);
server.get("/", (req, res) => {
  res.status(200).json({ message: "server running" });
});

module.exports = server;
