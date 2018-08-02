const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const db = require('./data/db');


const server = express();

server.use(express.json());

server.use(morgan('dev'));


server.get('/', (req, res) => {
	res.send('Welcome, testing...');

});


server.get('/api/dishes', (req, res)=>{
	
	db('dish')
	.then(response => {
                res.status(200).json(response);
        })

        .catch(err => res.status(500).json({errorMessage: "There was an error whil retrieving dishes from the database"}));

});









server.listen(4000, ()=> console.log('API running on port 4000'));
