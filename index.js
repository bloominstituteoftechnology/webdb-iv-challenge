const db = require('./data/dbHelpers.js');

db.findDishes()
.then(dishes => {
    console.log('dishes', dishes);
}).catch(err => {
    console.log('issue with dishes', err);
});

db.findRecipes()
.then(recipes => {
    console.log('recipes', recipes);
}).catch(err => {
    console.log('issue with recipes', err);
});

db.findIngredients()
.then(ingredients => {
    console.log('ingredients', ingredients);
}).catch(err => {
    console.log('issue with ingredients', err);
});

db.findRecipeIngredients()
.then(ri => {
    console.log('recipe_ingredients', ri);
}).catch(err => {
    console.log('issue with recipe_ingredients', err);
});

db.findRecipeInstructions()
.then(ri => {
    console.log('recipe_instructions', ri);
}).catch(err => {
    console.log('issue with recipe_instructions', err);
});