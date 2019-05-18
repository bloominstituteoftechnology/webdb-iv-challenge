const db = require('../dbConfig.js');

module.exports = {
    getDish,
    getDishes,
    addDish,
    updateDish,
    removeDish
};

function getDish(id) {
    // return the dish with the provided id and include a list of the related recipes

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

function getDishes() {
    // return a list of all dishes in the database.
    return db('dishes');
}

function addDish(dish) {
    // add the dish to the database and return the id of the new dish.
    return db('dishes')
        .insert(dish)
        .then(id => ({ id: id[0] }));
};

function updateDish(id, dish) {
    // update the dish at id, return the number of records updated
    return db('dishes')
        .where('id', Number(id))
        .update(dish);
};

function removeDish(id) {
    // delete the dish at id, return number of records deleted
    return db('dishes')
        .where('id', Number(id))
        .del();
}