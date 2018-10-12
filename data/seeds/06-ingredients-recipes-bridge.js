
exports.seed = function(knex, Promise) {
  return knex('ingredients_recipes_bridge')
    .truncate()
    .then(function () {
      return knex('ingredients_recipes_bridge').insert([
        {recipe_id: '1', ingredient_id: '1', unit_id: '6', quantity: '0.25'}
      ]);
    });
};
