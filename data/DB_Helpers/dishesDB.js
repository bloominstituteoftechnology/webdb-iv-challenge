const knex = require('knex')
const config = require('../../knexfile')
const dishesDB = knex(config.development)

module.exports = {
 pull: () => {
  dishesDB('dishes')
 },

 pullById: (id) => {
  dishesDB('dishes')
 },

 place: (dish) => {
  dishesDB('dishes')
 },

 alter: (id, dish) => {
  dishesDB('dishes')
 },

 clear: (id) => {
  dishesDB('dishes')
 }
}