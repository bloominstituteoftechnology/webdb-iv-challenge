const express = require('express');
const server = express();

const db = require("./data/db");
const port = 8000;

server.use(express.json());

server.get("/", (req, res) => {
  res.json({"Message": "Hello World!"});
});



server.listen(port, () => { console.log(`Server is running on port ${port}`)});
