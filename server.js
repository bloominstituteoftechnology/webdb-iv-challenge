const express = require('express');
const bodyParser = require('body-parser');
const knex = require('./database/db');
const helmet = require('helmet');
const cors = require('cors');

const port = 8000;
const server = express();

server.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));


server.get('/', (req, res) => {

  res.send('Hello World <br><h1>RDBMS-RECIPE-BOOK : working on mvp</h1> <h3>Sam Khaled</h3>');
});





// server.listen(port, () => console.log(`\n Server is running on http://localhost:${port} === \n`));
server.listen(port, function() {
	console.log(`\n Server is running on http://localhost:${port} === \n`);
});