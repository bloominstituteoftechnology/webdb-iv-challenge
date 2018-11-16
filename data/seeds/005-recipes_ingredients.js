exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').del().then(function () {
    // Inserts seed entries
    return knex('recipe_ingredients').insert([
      { quantity: 'one entire', recipe_id: 1, ingredient_id: 1 },
      { quantity: '3 cups', recipe_id: 2, ingredient_id: 4 },
      { quantity: '200ml/7fl oz', recipe_id: 3, ingredient_id: 1 },
      { quantity: '100g/3½oz', recipe_id: 3, ingredient_id: 2 },
      { quantity: '1 tsp', recipe_id: 3, ingredient_id: 3 },
      { quantity: '250g/9oz', recipe_id: 3, ingredient_id: 4 },
      { quantity: '4 tbsp', recipe_id: 3, ingredient_id: 5 },
      { quantity: '2 free-range', recipe_id: 3, ingredient_id: 6 },
      { quantity: '2 tbsp', recipe_id: 3, ingredient_id: 7 }
    ])
  })
}
