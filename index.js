const express = require("express");
const helmet = require("helmet");

const dishesRoutes = require("./dishes/dishesRoutes.js");

const server = express();

server.use(express.json());
server.use(helmet());

server.use("/api/dishes", dishesRoutes);

const port = 3300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
