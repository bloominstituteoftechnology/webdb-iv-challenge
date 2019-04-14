
exports.seed = function(knex, Promise) {
      // Inserts seed entries
      return knex('table_name').insert([
        {recipe_id: 1, ingredient_id: 1, quantity: 10},
        {recipe_id: 1, ingredient_id: 1, quantity: 10},
        {recipe_id: 1, ingredient_id: 1, quantity: 10}
      ]);
};
