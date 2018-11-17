
exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
    return knex('recipeIngredientsMap').del()
        .then(function () {
            // Inserts seed entries
            return knex('recipeIngredientsMap').insert([
                //veggie pizza
                { recipeId: 1, ingredientId: 2, quantity: 1 },
                { recipeId: 1, ingredientId: 3, quantity: 2 },
                { recipeId: 1, ingredientId: 6, quantity: 3 },

                //meat pizza
                { recipeId: 2, ingredientId: 1, quantity: 1 },
                { recipeId: 2, ingredientId: 3, quantity: 2 },
                { recipeId: 2, ingredientId: 6, quantity: 3 },

                //veggie soup
                { recipeId: 3, ingredientId: 2, quantity: 1 },
                { recipeId: 3, ingredientId: 4, quantity: 2 },

                //meat soup
                { recipeId: 4, ingredientId: 1, quantity: 1 },
                { recipeId: 4, ingredientId: 4, quantity: 2 },

                //veggie burger
                { recipeId: 5, ingredientId: 2, quantity: 1 },
                { recipeId: 5, ingredientId: 3, quantity: 2 },
                { recipeId: 5, ingredientId: 5, quantity: 3 },

                //meat burger
                { recipeId: 6, ingredientId: 1, quantity: 1 },
                { recipeId: 6, ingredientId: 3, quantity: 2 },
                { recipeId: 6, ingredientId: 5, quantity: 3 },

            ]);
        });
};