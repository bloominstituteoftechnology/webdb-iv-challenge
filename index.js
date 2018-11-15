const express = require('express')
const knex = require('knex')
const db = require('./data/dbMethods.js')

const server = express()

server.use(express.json())

// verify database methods

// those that are commented out are commented out
// so that they don't keep adding the same thing 

db.getDishes()
  .then(res => {
    console.log('Dishes')
    console.log(res)
  })
  .catch(err => console.log(err))

// db.addDish({ name: 'Test dish' })
//   .then(res => {
//     console.log('Add dish')
//     console.log(res)
//   })
//   .catch(err => console.log(err))

db.getDish(1)
  .then(res => {
    console.log('Get Dish')
    console.log(res)
  })
  .catch(err => console.log(err))

db.getRecipes()
  .then(res => {
    console.log('Get Recipes')
    console.log(res)
  })
  .catch(err => console.log(err))

// db.addRecipe({ name: 'Test dish', dish_id: 1 })
//   .then(res => {
//     console.log('Add dish')
//     console.log(res)
//   })
//   .catch(err => console.log(err))

server.listen(9000, () => console.log('\n== Port 9k ==\n'))
