const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const server = express();

server.use(express.json());

server.use(morgan('dev'));


server.get('/', (req, res) => {
	res.send('Welcome, testing...');

});











server.listen(4000, ()=> console.log('API running on port 4000'));
