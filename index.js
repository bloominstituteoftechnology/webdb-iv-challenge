const express = require('express');
const app = express();

const Dishes = require('./database/dishHelpers');

app.use(express.json());

app.get('/dishes', (req, res) => {
  Dishes.getDishes()
    .then(dishes => res.status(200).json(dishes))
    .catch(err => res.status(500).json(err));
});

app.listen(8000, () => {
  console.log('Server listening on PORT 8000');
});
