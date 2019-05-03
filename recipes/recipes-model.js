const db = require('../data/dbConfig');

module.exports = {
    getRecipes,
    addRecipe,
    getRecipe
};

function getRecipes() {
    return db('recipes');
}

function addRecipe(recipe) {
    return db('recipes')
        .insert(recipe)
        .then(ids => ({ id: ids[0] }));
}

function getRecipe(id) {
    return db('recipes').where({ id }).first();
}