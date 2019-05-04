const knex = require("knex");
const knexConfig = require("../../knexfile");
const db = knex(knexConfig.development);

function getDishes() {
  return db('dishes').select('*');
}

function getDish(id) {
  return db('dishes').select('*').where({id}).first();
}

function addDish(dish) {
  return db.insert(dish).into('dishes');
}

function getDishWithRecipe(dishId) {
  return db('dishes')
            .join('recipes', 'dishes.id', '=', 'recipes.dish_id')
            .select('dishes.name as Dish', 'recipes.name as Recipe').where('recipes.id', dishId).first();
}

module.exports = {
  getDishes,
  getDish,
  addDish,
  getDishWithRecipe
}