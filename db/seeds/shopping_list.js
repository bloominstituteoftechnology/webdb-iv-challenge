
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('shopping_list').del()
    .then(function () {
      // Inserts seed entries
      return knex('shopping_list').insert([
        { recipe_id: 1, ingredient_id: 4, quantity: 1, units: 'pizza worth' },
        { recipe_id: 1, ingredient_id: 5, quantity: 1, units: 'big ass spoon' },
        { recipe_id: 1, ingredient_id: 2, quantity: 5, units: 'oz' },
        { recipe_id: 1, ingredient_id: 6, quantity: 32, units: 'pieces' },

        { recipe_id: 2, ingredient_id: 1, quantity: 1, units: 'pack' },
        { recipe_id: 2, ingredient_id: 2, quantity: 5, units: 'lbs' },
        { recipe_id: 2, ingredient_id: 3, quantity: 5, units: 'oz' },

        { recipe_id: 3, ingredient_id: 7, quantity: 48, units: '48' },
        { recipe_id: 3, ingredient_id: 8, quantity: 1, units: 'whole' },
        { recipe_id: 3, ingredient_id: 9, quantity: 5, units: 'pack' },
        { recipe_id: 3, ingredient_id: 10, quantity: 5, units: 'oz' },
      ]);
    });
};
