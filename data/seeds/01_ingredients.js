
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, recipe_id: 1, ingredient_name: 'Tomato Paste'},
        {id: 2, recipe_id: 2, ingredient_name: 'Sharp Cheddar'},
        {id: 3, recipe_id: 3, ingredient_name: 'Angus Beef'}
      ]);
    });
};
