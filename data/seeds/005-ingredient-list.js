
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients_list').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients_list').insert([
        {id: 1, recipe_id: 1, ingredient_id: 1},
        {id: 2, recipe_id: 1, ingredient_id: 2},
        {id: 3, recipe_id: 1, ingredient_id: 10},
        {id: 4, recipe_id: 1, ingredient_id: 6}
      ]);
    });
};
