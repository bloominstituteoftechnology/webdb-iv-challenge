const express = require('express');
const server = express();

const PORT = process.env.PORT || 3300;

server.use(express.json());

server.post('/', (req, res) => {

});

server.get('/', (req, res) => {

});

server.get('/:id', (req, res) => {

});

server.put('/:id', (req, res) => {

});

server.delete('/:id', (req, res) =>{

});

server.listen(PORT, () => {
   console.log('please work, please work, please work')
});