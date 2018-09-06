exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes_ing').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes_ing').insert([
        {recipe_id: '4', ingredient_id: '1', amount: 1, measurement: 'cup'},
        {recipe_id: '8', ingredient_id: '4', amount: 2, measurement: ''},
        {recipe_id: '1', ingredient_id: '6', amount: 3, measurement: 'tablespoon'}
      ]);
    });
};
