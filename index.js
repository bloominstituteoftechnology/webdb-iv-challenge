const express = require('express');
const knex = require('knex');
const helmet = require('helmet');

const app = express();

app.use(helmet());
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json("Hello from GET request");
});


const PORT = process.env.PORT || 1234;
app.listen(PORT, () => console.log(`Express app listening at http://127.0.0.1:${PORT}`));
