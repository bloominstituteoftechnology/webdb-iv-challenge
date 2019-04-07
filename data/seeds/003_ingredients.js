
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredient')
  .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredient').insert([
        {recipe_id: 1, ingredient: 'ingredient1'},
        {recipe_id: 2, ingredient: 'ingredient2'},
        {recipe_id: 3, ingredient: 'ingredient3'},
        {recipe_id: 4, ingredient: 'ingredient4'},
        {recipe_id: 5, ingredient: 'ingredient5'},
        {recipe_id: 6, ingredient: 'ingredient6'},
        {recipe_id: 7, ingredient: 'ingredient7'},
        {recipe_id: 8, ingredient: 'ingredient8'},
        {recipe_id: 9, ingredient: 'ingredient9'}
      ]);
    });
};