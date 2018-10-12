const express = require('express');
const router = express.Router();
const db = require('../data/helpers/dishesDBHelpers');


router.get('/', async (req, res) => {
  const dishes = await db.getDishes();
  try {
      res.status(200).json(dishes);
  } catch (error) {
      res.status(500).json(error);
  }
})

module.exports = router;