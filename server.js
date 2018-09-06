const express = require("express");
const knex = require("knex");
// const dbconfig = require("./knexfile");
// const db = knex(dbconfig.development);
const server = express();
const dishes = require("./helpers/index");

server.use(express.json());

// server.get("/dishes", (req, res) => {
//   db("dishes")
//     .then(dishes => {
//       res.status(201).json(dishes);
//     })
//     .catch(err => {
//       console.log("error", err);
//       res.status(500).json({ message: "error fetching data" });
//     });
// });

server.get("/dishes/:id", (req, res) => {
  dishes.getDishes(req.params.id)
    .then(dish => {
      if (dish.length === 0) {
        res
          .status(404)
          .json({ message: "The dish with the specified ID does not exist" });
      } else {
        res.status(200).json(dish);
      }
    })
    .catch(err => {
      console.log("error", err);
      res.status(500).json({ message: "error fetching data" });
    });
});

// server.get("/dishes/:id/recipes", (req, res) => {
//   db("dishes")
//     .innerJoin("recipes", "dishes.id", "recipes.dish_id")
//     .where("dishes.id", req.params.id)
//     .select({ name: "recipes.recipe_name", cohort: "dishes.name" })
//     .then(cohort => {
//       console.log(cohort);
//       if (cohort.length === 0) {
//         res
//           .status(404)
//           .json({ message: "The cohort with the specified ID does not exist" });
//       } else {
//         res.status(200).json(cohort);
//       }
//     })
//     .catch(err => {
//       console.log("error", err);
//       res.status(500).json({ message: "error fetching data" });
//     });
// });

// server.post("/dishes", (req, res) => {
//   const cohort = req.body;
//   if (cohort != null && cohort.name != "") {
//     db("dishes")
//       .insert(cohort)
//       .then(ids => {
//         res.status(201).json(ids);
//       })
//       .catch(err => {
//         console.log("error", err);
//         res.status(500).json({ message: "error posting data" });
//       });
//   } else {
//     res.status(400).json({ error: "Please provide a dish name" });
//   }
// });

// server.put("/dishes/:id", (req, res) => {
//   db("dishes")
//     .where({ id: req.params.id })
//     .update(req.body)
//     .then(posts => {
//       res.status(200).json(posts);
//     })
//     .catch(err => {
//       console.log("error", err);
//       res.status(500).json({ message: "error updating data" });
//     });
// });

// server.delete("/dishes/:id", (req, res) => {
//   db("dishes")
//     .delete()
//     .where({ id: req.params.id })
//     .then(cohort => {
//       res.status(200).json(cohort);
//     })
//     .catch(err => {
//       console.log("error", err);
//       res.status(500).json({ message: "error deleting data" });
//     });
// });

server.listen(3700, () => console.log("\n~~~~~~ Listening on port 3700 ~~~~~~\n"));
