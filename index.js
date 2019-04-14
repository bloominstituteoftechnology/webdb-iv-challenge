const express = require('express')
const db = require('./data/dataAccess')

const server = express()
server.use(express.json());

server.get('/api/dishes', (req, res) => {
    db
        .getDishes()
        .then( dishes => {
            res.status(200).json(dishes)
        })
        .catch(err => {
            res.status(500).json({message: err})
        })
});

server.post('/api/dishes', (req, res) => {
    console.log(req.body)

    db
        .addDishes(req.body)
        .then( dish => {
            res.status(201).json(dish)
        })
        .catch( err => {
            res.status(500).json({message: err})
        })
});

server.get('/api/dishes/:id', (req, res) => {
    db
        .getDish(req.params.id)
        .then( dish => {
            res.status(200).json(dish)
        })
        .catch(err => {
            res.status(500).json({message: err})
        })
});

server.get('/api/recipes', (req, res) => {
    db
        .getRecipes()
        .then(recipes => {
            res.status(200).json(recipes)
        })
        .catch(err => {
            res.status(500).json({message: err})
        })
});

server.post('/api/recipes', (req, res) => {
    db
        .addRecipe(req.body)
        .then(count => {
            res.status(201).json(count)
        })
        .catch(err => {
            res.status(500).json({message: err})
        })
});



const port = 9000;
server.listen(port, () => console.log(`Server is up at port ${port}`));