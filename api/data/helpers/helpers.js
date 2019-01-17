const knex = require("knex");
const knexConfig = require("../../knexfile.js");
const db = knex(knexConfig.development);

module.exports = {
	getDishes,
	addDish,
	getDish,
	getRecipes,
	addRecipe,
};

function getDishes() {
	// Return a list of all dishes in the db
	return db.select("*").from("dishes");
}

function addDish(dish) {
	//  should add the dish to the database and return the id of the new dish.
	return db("dishes").insert({ name: dish });
}

function getDish(id) {
	// should return the dish with the provided id and include a list of the related recipes.
	return db("dishes").where("id", id);
}

function getRecipes() {
	// should return a list of all recipes in the database including the dish they belong to.
}

function addRecipe(recipe) {
    // should add a recipe to the database and return the id of the new recipe.
    return db('recipes').insert({ name: recipe }); //Need to add other recipe data columns
}
