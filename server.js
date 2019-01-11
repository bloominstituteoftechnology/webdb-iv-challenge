const express = require("express");
const DB = require("./data/helpers/helpers");
const SERVER = express();
const PORT = process.env.PORT || 3456;

const dishesRouter = require("./routers/dishes/");
const recipesRouter = require("./routers/recipes/");

SERVER.use(express.json());
SERVER.use("/api/dishes", dishesRouter);
SERVER.use("/api/recipes", recipesRouter);

SERVER.listen(PORT, () => {
  console.log(`Listening on PORT:${PORT}`);
});
