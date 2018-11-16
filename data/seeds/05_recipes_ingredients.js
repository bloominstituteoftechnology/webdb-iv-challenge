exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes_ingredients').del().then(function () {
    // Inserts seed entries
    return knex('recipes_ingredients').insert([
      { recipe_id: 1, ingredient_id: 10, quantity: 3, unit: 'cups' },
      { recipe_id: 1, ingredient_id: 11, quantity: 1 / 2, unit: 'cup' },
      { recipe_id: 1, ingredient_id: 7, quantity: 1 / 2, unit: 'pound' },
      { recipe_id: 1, ingredient_id: 12, quantity: 3, unit: 'tablespoons' }
    ])
  })
}
