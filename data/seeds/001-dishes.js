
exports.seed = function(knex, Promise) {
      // Inserts seed entries
      return knex('dishes').insert([
        {name: 'Chocolate cake', recipe_ingredients: 1},
        {name: 'Buttered corn', recipe_ingredients: 2},
        {name: 'Omelet du Fromage', recipe_ingredients: 3}
      ]);
};
