const knex = require('knex')
const config = require('../../knexfile')
const ingredientsDB = knex(config.development)


module.exports = {
 pull: () => {
  ingredientsDB('ingredients')
 },

 pullById: (id) => {
  ingredientsDB('ingredients')
 },

 place: (ingredient) => {
  ingredientsDB('ingredients')
 },

 alter: (id, ingredient) => {
  ingredientsDB('ingredients')
 },

 clear: (id) => {
  ingredientsDB('ingredients')
 }
}