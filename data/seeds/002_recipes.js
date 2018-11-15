
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe')
  .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe').insert([
        {dish_id: 1, name: 'recipe1'},
        {dish_id: 2, name: 'recipe2'},
        {dish_id: 3, name: 'recipe3'},
        {dish_id: 4, name: 'recipe4'},
        {dish_id: 5, name: 'recipe5'},
        {dish_id: 6, name: 'recipe6'},
        {dish_id: 2, name: 'recipe7'},
        {dish_id: 2, name: 'recipe8'},
        {dish_id: 4, name: 'recipe9'}
      ]);
    });
};
