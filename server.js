const express = require('express');
const server = express();

server.use(express.json());

server.get('/', (req,res) => {
    res.send('recipe book is up & running. . .');
})

server.get('/recipes/:id', (req, res) => {
    const { id } = req.params;

    db('recipes')
    .where({ id })
    .then(response => {
        res.status(200).json(response);
    })
})

server.listen(8222, () => console.log('API Running on port 8222...'));