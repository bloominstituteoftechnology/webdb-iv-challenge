exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
    return knex('recipeingredients').truncate()
        .then(function () {
            // Inserts seed entries
            return knex('recipeingredients').insert([
                {recipe_id: 1, ingredient_id: 1, quantity: 1.2},
                {recipe_id: 2, ingredient_id: 10, quantity: 1.5},
                {recipe_id: 1, ingredient_id: 8, quantity: 1.6},
            ]);
        });
};