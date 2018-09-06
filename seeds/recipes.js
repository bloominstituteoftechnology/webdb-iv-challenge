
exports.seed = function(knex, Promise) {
  return knex('recipes')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { recipe_id: 1, recipe: "speghetti", dish_id: 1},
        { recipe_id: 2,recipe: "fried fish", dish_id: 2},
      ]);
    });
};