const express = require("express");
const DB = require("../../data/helpers/helpers");

const router = express.Router();

// add a get request to all dishes
router.get("/", (req, res) => {
  DB.getDishes()
    .then(dishes => {
      // check that dishes is an object and contains some properties
      if (typeof dishes === "object" && dishes.length > 0) {
        res.json({ dishes });
      } else {
        res.status(400).json({ error: "Please check again, no dishes found." });
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: "Please check your connection and try again." });
    });
});

// get a dish by id
router.get("/:id", (req, res) => {
  const { id } = req.params;

  DB.getDish(id)
    .then(dish => {
      // check if dish is an object and has a name present
      if (typeof dish === "object" && dish.name) {
        res.json({ dish });
      } else {
        res.status(400).json({ error: "No dish by that ID exists." });
      }
    })
    .catch(err => {
      res.status(500).json({ error: "Please check your connection." });
    });
});

// add a dish
router.post("/", (req, res) => {
  const { dish } = req.body;

  DB.addDish(dish)
    .then(result => {
      // check if result is an array with a number
      if (typeof result === "object" && typeof result[0] === "number") {
        DB.getDish(result[0])
          .then(dish => {
            if (dish.name) {
              res.status(201).json({ dish });
            } else {
              res
                .status(400)
                .json({ error: "Dish was not created, try again" });
            }
          })
          .catch(err => {
            res.status(500).json({ error: err.response });
          });
      } else {
        res
          .status(401)
          .json({ error: "Please check your input and try again." });
      }
    })
    .catch(err => {
      res.status(500).json({ error: err.response });
    });
});

// update a dish
router.put("/:id", (req, res) => {
  const { dish } = req.body;
  const { id } = req.params;

  DB.editDish(id, dish)
    .then(result => {
      if (result) {
        DB.getDish(id)
          .then(newDish => {
            if (newDish.name) {
              res.status(203).json({ newDish });
            } else {
              res.status(400).json({
                error: "Please check your input and try to edit dish again."
              });
            }
          })
          .catch(err => {
            res
              .status(500)
              .json({ error: "Check connection, error code: NOEDITGET" });
          });
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: "Please check your connection. ERROR code NOEDIT" });
    });
});

// delete a dish
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  DB.getDish(id)
    .then(dish => {
      DB.deleteDish(id)
        .then(result => {
          if (result) {
            // send a copy of deleted dish with a truthy
            res.json({ deleted: true, dish });
          } else {
            res.status(400).json({ error: "ERROR code NODELID" });
          }
        })
        .catch(err => {
          res.status(500).json({ error: "ERROR code NODELDB" });
        });
    })
    .catch(err => {
      res.status(500).json({ error: "ERROR code NODISDEL" });
    });
});

module.exports = router;
