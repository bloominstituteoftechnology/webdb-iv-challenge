const express = require('express')
const handlers = require('./db/handlers')
const server = express()
 
server.use(express.json())

server.get('/dishes', (req, res) => {
  handlers.getDishes()
    .then(dishes => res.status(200).json(dishes))
    .catch(error => res.status(500).json({ message: error }))
})

server.get('/recipes', (req, res) => {
  handlers.getRecipes()
    .then(recipes => res.status(200).json(recipes))
    .catch(error => res.status(500).json({ message: error }))
})

server.get('/dishes/:id', (req, res) => {
  handlers.getDish(req.params.id)
    .then(dishes => res.status(200).json(dishes))
    .catch(error => res.status(500).json({ message: error }))
})

server.post('/dishes', (req, res) => {
  handlers.addDish(req.body)
    .then(id => res.status(200).json(id))
    .catch(error => res.status(500).json({ message: error }))
})

server.post('/recipes', (req, res) => {
  handlers.addRecipe(req.body)
    .then(id => res.status(200).json(id))
    .catch(error => res.status(500).json({ message: error }))
})

server.listen('3300', () => {
  console.log(`\n=== Web API Listening on http://localhost:3300 ===\n`)
})