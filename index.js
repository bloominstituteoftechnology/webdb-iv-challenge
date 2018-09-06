const express = require('express');
const cors = require('cors');

const helpers = require('./db/helpers');

const app = express();

// middleware config
app.use(cors());
app.use(express.json());

app.get('/api/dishes', function(req, res, next) {
  helpers
    .getDishes()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(next);
});

app.use(function(err, _, res, _) {
  console.error(err);
  res.status(500).json({ message: 'Bad luck mate try again later ' });
});

app.listen(5000, () => console.log('\n=== Server running on port 5000 ===\n'));
