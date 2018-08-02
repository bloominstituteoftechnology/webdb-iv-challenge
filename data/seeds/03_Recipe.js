
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('Recipes').insert([
        { dish_id: 1, recipe_name: 'sunny-side-up eggs'},
        { dish_id: 2, recipe_name: 'chicken soup'}
      ]);
    });
};
