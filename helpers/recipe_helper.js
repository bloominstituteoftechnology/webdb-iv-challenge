//houses recipe helper methods
const express = require("express");
const knex = require("knex");
const db = require("../knexfile.js");

//export module names
module.exports = {
   getRecipes,
   addRecipe,
}

/*get all recipes and related dishes
   grab the child (recipe)
   join child to parent (dishes)
   return the related dishes to recipes to said recipes
*/
function getRecipes() {
   return db("recipes as r")
      .join("dishes as d", "d.id", "r.dish_id")
      .select("r.id", "r.recipe_name", "d.id")
      .where("r.dish_id", "d.id")
}

/*add a new recipe
   return id of new dish
*/
function addRecipe(recipe) {
   return db("recipes")
      .insert(recipe)
      .then(ids => ({id: ids[0]}));
}