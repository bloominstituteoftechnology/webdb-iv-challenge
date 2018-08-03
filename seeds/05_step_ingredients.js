
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        { recipe_id: 1, ingredient_id: 10, quantity: '3 cups' },
        { recipe_id: 1, ingredient_id: 11, quantity: '1/2 cup' },
        { recipe_id: 1, ingredient_id: 7, quantity: '1/2 pound' },
        { recipe_id: 1, ingredient_id: 12, quantity: '3 tablespoons' }
      ])
    })
}
