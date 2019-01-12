const knex = require('knex');

const dbConfig = require('./knexfile');

const db = knex(dbConfig.development);

module.exports = {
    getDishes,
    addDish,
    getDishById,
    getRecipes,
    addRecipe,
    shoppingList
}

function getDishes() {
    return  db('dishes')
    .then(rows => {
        console.log(rows)
    })
};

function addDish(dish) {
    return db('dishes').insert(dish)
    .then(id => { console.log(id)})
}
 

function getDishById(id) {
    return db('dishes').leftJoin('recipes', 'Dish_Id', 'dishes.id')
    .then(rows => {
        rows.map(item => {
            if(item.Dish_Id === id) {
                console.log(item)
            }
        })
    })
}

function getRecipes() {
    return db('recipes')
    .then(rows => {
        console.log(rows)
    })
}

function addRecipe(recipe) {
    return db('recipes').instert(recipe)
    .then(id => {
        console.log(id)
    })
}

function shoppingList(recipe) {
    return db('recipes').where('Recipe_Name', recipe)
    .leftJoin('steps', 'Recipe_Id', 'recipes.id')
    .then(info => {
        info.forEach(item => {
            db('ingredients').where('id', item.Ingredient_Id)
            .then(ingredient => 
                console.log(ingredient[0].ingredient_name))
        })
    })
}
