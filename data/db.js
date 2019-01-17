const knex = require("knex");
const knexConfig = require("../knexfile.js");
const db = knex(knexConfig.development);

module.exports = {
  getDishes,
  addDish,
  getDish,
  getRecipes,
  addRecipe
};

function getDishes() {
  return db("dishes");
}

function addDish(dish) {
  return db("dishes")
    .insert(dish)
    .then(ids => ({ id: ids[0] }));
}

function getDish(id) {
  return db
    .select("dishes.name as dish", "recipes.name as recipe")
    .from("dishes")
    .innerJoin("recipes", "dishes.id", "=", "recipes.dish_id")
    .where("dishes.id", id);
}

function getRecipes() {
  return db
    .select("recipes.name as recipe", "dishes.name as dish")
    .from("recipes")
    .innerJoin("dishes", "dishes.id", "=", "recipes.dish_id");
}

function addRecipe(recipe) {
  return db("recipes")
    .insert(recipe)
    .then(ids => ({ id: ids[0] }));
}

// function find() {
//   return db("posts");
// }

// function findById(id) {
//   return db("posts").where({ id: Number(id) });
// }

// function insert(post) {
//   return db("posts")
//     .insert(post)
//     .then(ids => ({ id: ids[0] }));
// }

// function update(id, post) {
//   return db("posts")
//     .where("id", Number(id))
//     .update(post);
// }

// function remove(id) {
//   return db("posts")
//     .where("id", Number(id))
//     .del();
// }
