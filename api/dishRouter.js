const codes = require("./../data/statusCodes");

const express = require("express");
const db = require("../data/db");
const router = express.Router();

router.get('/', (req, res, next) => {
    db('dishes')
    .then(response => {
        res.status(codes.OK).json(response);
    })
    .catch(err => {
        next(err);
    })
});

router.get("/:id/recipes", (req, res, next) => {
    const { id } = req.params;
    db('recipes')
    .join('dishes', 'dishes.id', '=', 'recipes.dish_id')
    .select('recipes.*')
    .where('recipes.dish_id', id)
      .then(response => {
        res.status(codes.OK).json(response);
      })
      .catch(err => {
        next(err);
      });
  });

module.exports = router;