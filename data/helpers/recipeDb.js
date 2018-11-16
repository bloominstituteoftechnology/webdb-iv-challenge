const db = require('../dbConfig.js');

module.exports = {
    getRecipes,
    addRecipe
};

function getRecipes() {
// should return a list of all recipes in the database including the dish they belong to.
    return db('recipes as r')
        .join('dishes as d', 'r.dish_id', 'd.id')
        .select('r.id as recipeId', 'r.recipe_name as recipeName', 'r.dish_id as dishId', 'd.dish_name as dishName');
}

function addRecipe(recipe) {
// should add a recipe to the database and return the id of the new recipe.
    return db('recipes')
        .insert(recipe)
        .then(id => ({ id: id[0] }));
}

