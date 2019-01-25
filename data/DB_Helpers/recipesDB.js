const knex = require('knex')
const config = require('../../knexfile')
const recipeDB = knex(config.development)

module.exports = {
 pull: () => {
  recipeDB('recipes')
 },

 pullById: (id) => {
  recipeDB('recipes')
 },

 place: (recipe) => {
  recipeDB('recipes')
 },

 alter: (id, recipe) => {
  recipeDB('recipes')
 },

 clear: (id) => {
  recipeDB('recipes')
 }
}