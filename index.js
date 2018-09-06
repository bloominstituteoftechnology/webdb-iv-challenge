'use strict'

const Express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const recipieDb = require("./db/dbHelper/recpieModel");

const PORT = 5000
const server = new Express()

server.use(helmet())
server.use(Express.json())
server.use(morgan('dev'))

server.get('/api/dishes', async (req, res, next) => {
    try {
        const data = await recipieDb.getDishes()
        res.status(200).json({
            status:true,
            data: data
        })
    } catch (err){
        next(err)
    }
})

server.get('/api/dishes/:id', async (req, res, next) => {
    try {
        const data = await recipieDb.getDishes(req.params.id)
        res.status(200).json({
            status:true,
            data: data
        })
    } catch (err){
        next(err)
    }
})

server.post('/api/dishes', async (req, res, next) => {
    try {
        const data = await recipieDb.addDish(req.body)
        res.status(200).json({
            status:true,
            data: data
        })
    } catch (err){
        next(err)
    }
})

server.get('/api/recpies', async (req, res, next) => {
    try {
        const data = await recipieDb.getRecipes()
        res.status(200).json({
            status:true,
            data: data
        })
    } catch (err){
        next(err)
    }
})


server.post('/api/recpies', async (req, res, next) => {
    try {
        const data = await recipieDb.addRecipe(req.body)
        res.status(200).json({
            status:true,
            data: data
        })
    } catch (err){
        next(err)
    }
})

server.listen(PORT, () => console.log(`SERVER is running on PORT ${PORT}`))