//dependency imports
const express = require("express");

//in-app imports
const db = require("./data/db");

//init server
const server = express();

//middleware
server.use(express.json());

//endpoints
server.get("/", (req, res) => {
  res.json({ server: "listening" });
});

//get all dishes in database
server.get("/api/dishes", (req, res) => {
  db.getDishes()
    .then(dishes => {
      res.status(200).json(dishes);
    })
    .catch(err => res.status(500).json({ error: "Couldn't retrieve dishes." }));
});

//add dish to database
server.post("/api/dishes", (req, res) => {
  const dish = req.body;
  if (!dish.name) {
    res.status(400).json({ message: "You have to name your dish something." });
  } else {
    db.addDish(dish)
      .then(id => res.status(201).json(id))
      .catch(err => res.status(500).json({ error: "Couldn't add dish." }));
  }
});

server.listen(7000, () =>
  console.log("\n===Server listening on port 7000===\n")
);
