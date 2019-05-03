const db = require('../data/dbConfig');

module.exports = {
    getRecipes,
    addRecipe
};

function getRecipes() {
    return db('recipes');
}

function addRecipe(recipe) {
    return db('recipes')
        .insert(recipe)
        .then(ids => ({ id: ids[0] }));
}