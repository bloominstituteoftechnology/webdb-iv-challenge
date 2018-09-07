const express = require('express');
const cors = require('cors');

const helpers = require('./db/helpers');

const app = express();

// middleware config
app.use(cors());
app.use(express.json());

app
  .route('/api/dishes')
  .get(function(req, res, next) {
    helpers
      .getDishes()
      .then(data => {
        res.status(200).json(data);
      })
      .catch(next);
  })
  .post(function(req, res, next) {
    const { name } = req.body;

    if (!name)
      return res.status(400).json({ message: 'Please provide a name' });

    helpers
      .addDish({ name })
      .then(data => res.status(201).json(data))
      .catch(next);
  });

app.route('/api/dishes/:id').get(function(req, res, next) {
  helpers
    .getDish(req.params.id)
    .then(data => {
      if (!data)
        return res.status(404).json({ message: 'The dish cannot be found' });

      res.status(200).json(data);
    })
    .catch(next);
});

app
  .route('/api/recipes')
  .get(function(req, res, next) {
    helpers
      .getRecipes()
      .then(data => res.status(200).json(data))
      .catch(next);
  })
  .post(function(req, res, next) {
    const { name, dish_id } = req.body;

    if (!name || !dish_id)
      return res
        .status(400)
        .json({ message: 'You need to provide a name and a dish id' });

    helpers
      .addRecipe({ name, dish_id })
      .then(data => res.status(201).json(data))
      .catch(next);
  });

app.route('/api/recipes/:id').get(function(req, res, next) {
  helpers
    .getRecipe(req.params.id)
    .then(data => {
      if (!data) return res.status(404).json({ message: 'Recipe ID invalid' });

      res.status(200).json(data);
    })
    .catch(next);
});

app.use(function(err, _, res, _) {
  console.error(err);
  res.status(500).json({ message: 'Bad luck mate try again later ' });
});

app.listen(process.env.PORT || 5000, () =>
  console.log('\n=== Server running on port 5000 ===\n'),
);
