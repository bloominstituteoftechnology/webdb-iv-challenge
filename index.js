const express = require("express");
const helmet = require("helmet");
const knex = require("knex");

const dataConfig = require("./knexfile");
const db = knex(dataConfig.development);
//==============================================================================//
const database = require("./db/dbHelpers");

database.getDishes()
    .then(dishes => {
        console.log('Dishes:', dishes);
    });

database.addDish('Cookies')
    .then(id => {
        console.log('Id of added dish', id);
    })
    .catch(err => {
        console.error(err);
    });

database.getDish()
    .then(response => {
        console.log('getDish response:', response);
    })

database.getRecipes()
    .then(response => console.log('getRecipes response:', response));

database.addRecipe('Chocolate-Chip', 2)
    .then(response => console.log('addRecipe response:', response));
//==============================================================================//
const server = express();

server.use(express.json());
server.use(helmet());

server.get("/", (req, res) => {
  res.send("Hello World");
});

server.get("/api/dishes", (req, res) => {
  db("dishes")
    .then(dish => {
      res.status(200).json(dish);
    })
    .catch(err => {
      console.log("Error: ", err);
      res.status(500).json({ Error: "dishes cannot get retrieved" });
    });
});

server.get("/api/dishes/:id", (req, res) => {
  const { id } = req.params;
  db("dishes")
    .select("name")
    .where({ id })
    .then(dish => {
      res.status(200).json(dish);
    })
    .catch(err => {
      console.log("Error: ", err);
      res.status(500).json({ Error: "Dish cannot be retrieved" });
    });
});

server.post("/api/dishes", (req, res) => {
  const dishes = req.body;
  db.insert(dishes)
    .into("dishes")
    .then(id => {
      res.status(201).json(id);
    })
    .catch(err => {
      console.log("Error: ", err);
      res.status(500).json({ Error: "Pass in " });
    });
});

server.put("/api/dishes/:id", (req, res) => {
  const changes = req.body;
  const { id } = req.params;
  db("dishes")
    .where({ id })
    .update(changes)
    .then(count => {
      res.status(200).json(count);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

server.delete("/api/dishes/:id", (req, res) => {
  const { id } = req.params;

  db("dishes")
    .where({ id })
    .del()
    .then(count => {
      res.status(200).json(count);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

server.listen(6000, () => console.log("API is running on port 6000"));
