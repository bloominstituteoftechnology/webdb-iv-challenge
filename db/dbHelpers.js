const knex = require("knex");
const knexConfig = require("./knexfile");

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

function addDish(name) {
  return db("dishes").insert({ name });
}

function getDish(id) {
  /*
    SELECT dishes.name, recipes.name
    FROM dishes
    JOIN recipes
        ON dishes.id = recipes.dish_id
    WHERE id = 2
    */

  return db("dishes")
    .select("dishes.name", "recipes.name")
    .where("dishes.id", "=", id)
    .join("recipes", { "dishes.id": "recipes.dish_id" });
  // TODO: Format output better to have both dishes.name and recipes.name in output
}

function getRecipes() {
  // SELECT *
  // FROM recipes
  // JOIN dishes
  //     ON recipes.dish_id = dishes.id;

  return db("recipes")
    .select("dishes.name", "recipes.name")
    .join("dishes", "recipes.dish_id", "=", "dishes.id");
  // TODO: Format output better to have both dishes.name and recipes.name in output
}

function addRecipe(recipe, dish_id) {
  /*
    INSERT INTO recipes (
        name,
        dish_id
    ) VALUES (
        recipe,
        dish_id
    );
    */

  return db("recipes").insert({
    name: recipe,
    dish_id: dish_id
  });
  // TODO: Have it create a recipe given a recipe name and a dish name
}
