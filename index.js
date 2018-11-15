const express = require('express')
const helmet = require('helmet')
const db = require('./data/dataAccess')

const server = express()

server.use(express.json())
server.use(helmet())

server.get('/api/dishes', (req, res) => {
    db
        .getDishes()
        .then(dishes => {
            res.status(200).json(dishes)
        })
        .catch(e => res.status(500).json({ error: 'ERROR', e: e }))
})

server.post('/api/dishes', (req, res) => {
    console.log(req.body)
    db
        .addDish(req.body)
        .then(dish => {
            res.status(201).json(dish)
        })
        .catch(e => res.status(500).json(e))
})

server.get('/api/dishes/:id', (req, res) => {
    db
        .getDish(req.params.id)
        .then(dish => {
            res.status(200).json(dish)
        })
        .catch(e => res.status(500).json(e))
})

server.get('/api/recipes', (req, res) => {
    db
        .getRecipes()
        .then(recipes => {
            res.status(200).json(recipes)
        })
        .catch(e => res.status(500).json(e))
})

server.post('/api/recipes', (req, res) => {
    db
        .addRecipe(req.body)
        .then(id => {
            res.status(202).json(id)
        })
        .catch(e => res.status(500).json(e))
})

const port = 8000
server.listen(port, () => console.log(`Server is up at port ${port}`))
