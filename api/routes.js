const express = require('express');

const recipesRoutes = require('./recipesRoutes');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'api' });
})

router.use('/recipes', recipesRoutes)

module.exports = router;
