const express = require("express");

const dishes = require("./dishesModel.js");

const router = express.Router();

//=============== DISHES ENDPOINTS =============== //

//get a list of dishes
router.get("/", (req, res) => {
  dishes
    .getDishes()
    .then(dishes => {
      res.status(200).json(dishes);
    })
    .catch(err => res.status(500).json(err));
});

//get a dish by id
router.get("/:id", (req, res) => {
  const { id } = req.params;
  dishes
    .getDish(id)
    .then(dish => {
      if (!dish) {
        res.status(404).json({ message: "No dish found" });
      } else {
        res.status(200).json(dish);
      }
    })
    .catch(err => res.status(500).json(err));
});

//add a new dish
router.post("/", (req, res) => {
  const { name } = req.body;
  const dish = { name };

  if (!name) {
    return res
      .status(400)
      .json({ message: "Please provide a name for the dish." });
  }
  dishes.addDish(dish).then(id => {
    res.status(201).json(id);
  });
});

module.exports = router;
