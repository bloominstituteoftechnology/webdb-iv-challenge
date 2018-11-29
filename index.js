const express = require ('express');
const helmet = require ('helmet');
const morgan = require ('morgan');
const db = require ('./data/db');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(morgan('dev'));

server.get('/', (req, res) => {
    res.status(200).json({ api: 'running' });
});

server.get('/dishes', (req, res) => {
    db.getDishes()
    .then(dishes => res.status(200).json(dishes))
    .catch(error => res.status(500).json({ message: 'Could Not Retrieve Dishes', error }))
});

server.get('/dishes/:id', (req, res) => {
    const { id } = req.params; 
    db.getDish(id)
    .then(dish => res.status(201).json(dish))
    .catch(error => res.status(500).json({ message: 'No Way That Dish Exists', error }))
});

server.listen(1337, function(){
    const port = 1337;
    console.log(`\n === API Listening On Domain http://localhost:${port} === \n`)
});