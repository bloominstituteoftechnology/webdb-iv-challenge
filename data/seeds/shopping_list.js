
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('shopping_list').del().truncate()
    .then(function () {
      // Inserts seed entries
      return knex('shopping_list').insert([
        // po boy rigatoni
        { recipe_id: 1, ingredient_id: 1, quantity: 1, measurement_unit: 'lbs.' },
        { recipe_id: 1, ingredient_id: 2, quantity: 1, measurement_unit: 'cup' },
        { recipe_id: 1, ingredient_id: 3, quantity: 1, measurement_unit: 'box' },
        { recipe_id: 1, ingredient_id: 6, quantity: 1, measurement_unit: 'jar' },

        // grannys bolognese
        { recipe_id: 2, ingredient_id: 1, quantity: 1, measurement_unit: 'lbs.' },
        { recipe_id: 2, ingredient_id: 2, quantity: 1, measurement_unit: 'cup' },
        { recipe_id: 2, ingredient_id: 3, quantity: 1, measurement_unit: 'box' },
        { recipe_id: 2, ingredient_id: 4, quantity: 1, measurement_unit: 'cup' },
        { recipe_id: 2, ingredient_id: 5, quantity: 1, measurement_unit: 'cup' },
        { recipe_id: 2, ingredient_id: 6, quantity: 1, measurement_unit: 'jar' },


        // chicken burrito bowl
        { recipe_id: 3, ingredient_id: 7, quantity: 1, measurement_unit: 'cup' },
        { recipe_id: 3, ingredient_id: 8, quantity: 2, measurement_unit: 'lbs.' },
        { recipe_id: 3, ingredient_id: 10, quantity: 1, measurement_unit: 'can' },
        { recipe_id: 3, ingredient_id: 11, quantity: 0.5, measurement_unit: 'cup' },
        { recipe_id: 3, ingredient_id: 15, quantity: 1, measurement_unit: 'cup' },
        { recipe_id: 3, ingredient_id: 17, quantity: 2, measurement_unit: 'tbsp.' },

        // spicy steak bowl
        { recipe_id: 4, ingredient_id: 7, quantity: 1, measurement_unit: 'cup' },
        { recipe_id: 4, ingredient_id: 10, quantity: 1, measurement_unit: 'can' },
        { recipe_id: 4, ingredient_id: 11, quantity: 0.5, measurement_unit: 'cup' },
        { recipe_id: 4, ingredient_id: 15, quantity: 1, measurement_unit: 'cup' },
        { recipe_id: 4, ingredient_id: 17, quantity: 2, measurement_unit: 'tbsp.' },
        { recipe_id: 4, ingredient_id: 9, quantity: 1, measurement_unit: 'steak' },
        { recipe_id: 4, ingredient_id: 12, quantity: 0.5, measurement_unit: 'cup' },
        { recipe_id: 4, ingredient_id: 16, quantity: 0.5, measurement_unit: 'cup' },
        { recipe_id: 4, ingredient_id: 31, quantity: 3, measurement_unit: 'peppers' },

        // salmon spinach (incomplete)
        { recipe_id: 5, ingredient_id: 18, quantity: 1, measurement_unit: 'steak' },
        { recipe_id: 5, ingredient_id: 19, quantity: 1, measurement_unit: 'bunch' },
        // salmon potatoes (incomplete)
        { recipe_id: 6, ingredient_id: 18, quantity: 1, measurement_unit: 'steak' },
        { recipe_id: 6, ingredient_id: 20, quantity: 4, measurement_unit: 'potatoes' },
      ]);
    });
};
