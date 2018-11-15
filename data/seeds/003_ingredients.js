
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredient')
  .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredient').insert([
        {recipe_id: 1, name: 'ingredient1'},
        {recipe_id: 2, name: 'ingredient2'},
        {recipe_id: 3, name: 'ingredient3'},
        {recipe_id: 4, name: 'ingredient4'},
        {recipe_id: 5, name: 'ingredient5'},
        {recipe_id: 6, name: 'ingredient6'},
        {recipe_id: 7, name: 'ingredient7'},
        {recipe_id: 8, name: 'ingredient8'},
        {recipe_id: 9, name: 'ingredient9'}
      ]);
    });
};