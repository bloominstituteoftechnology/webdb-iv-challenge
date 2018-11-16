const db = require('../dbConfig.js');

module.exports = {
    getDishes,
    addDish,
    getDish
};

function getDishes() {
    // should return a list of all dishes in the database.
    return db('dishes');
}

function addDish(dish) {
    // should add the dish to the database and return the id of the new dish.
    return db('dishes')
        .insert(dish)
        .then(id => ({ id: id[0] }));
};

function getDish(id) {
    // should return the dish with the provided id and include a list of the related recipes

    return db('dishes as d')
        .leftJoin('recipes as r', 'r.dish_id', 'd.id')
        .select('d.id as dishId', 'd.dish_name as dishName', 'r.id as recipeId', 'r.recipe_name as recipeName')
        .where('d.id', id)
        .then(toBeFormatted => {
            if(toBeFormatted.length){
                const resObj = {
                    id: toBeFormatted[0].dishId,
                    dishName: toBeFormatted[0].dishName,
                    recipes: []
                }

                if(toBeFormatted[0].recipeId){
                    toBeFormatted.forEach(row => {
                        resObj.recipes.push({ id: row.recipeId, name: row.recipeName });
                    });
                }

                return resObj;
            } else {
                return toBeFormatted;
            }
        })
}