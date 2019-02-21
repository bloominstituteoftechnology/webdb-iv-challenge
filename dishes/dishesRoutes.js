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

module.exports = router;
