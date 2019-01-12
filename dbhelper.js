const knex = require('knex');

const db_config = require('./knexfile');

const db = knex(db_config.development);

getDishes = () => {
    return db('dishes')
};


addDish = (dish) => {
    return db('dishes')
        .insert(dish)
        .then(ids => ({ id: ids[0] })

        )
};

getDish = (id) => {
    return db('dishes')
        .join('recipes', 'recipes.dishes_id', 'dishes.id')
        .where('dishes.id', id)
        .select('dish_name', 'recipe_name')
};

getRecipe = () => {
    return db('dishes')
        .join('recipes', 'dishes_id', 'dishes.id')
        .select('dish_name', 'recipe_name')
};

addRecipe = (recipe) => {
    return db('recipes')
        .insert(recipe)
        .then(ids => ({ id: ids[0] })

        )
};

module.exports = {
    getDishes,
    addDish,
    getDish,
    getRecipe,
    addRecipe
}
