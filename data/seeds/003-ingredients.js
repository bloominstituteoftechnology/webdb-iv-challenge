
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {recipe_id: 1, name: 'cebolla'},
        {recipe_id: 2, name: 'cilantro'},
        {recipe_id: 3, name: 'cheese'},
        {recipe_id: 3, name: 'red sauce'},
        {recipe_id: 3, name: 'green sauce'},
        {recipe_id: 3, name: 'crema'},
        {recipe_id: 3, name: 'rice'},
        {recipe_id: 3, name: 'black beans'}
        {recipe_id: 3, name: 'pinto beans'}
      ]);
    });
};
