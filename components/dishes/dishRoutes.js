const router = require('express').Router()
const controller = require('./dishControllers')

router.post('/', controller.addDish)

router.get('/', controller.getAllDishes)

router.get('/:id', controller.getAllDishes)

module.exports = router
