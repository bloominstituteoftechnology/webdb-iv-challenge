
exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex('ingredients').insert([
    {name: 'flour', recipe_id: 1},
    {name: 'vanilla', recipe_id: 1},
    {name: 'butter', recipe_id: 1},
    {name: 'brown sugar', recipe_id: 1},
    {name: 'cinnamon', recipe_id: 1},
    {name: 'eggs', recipe_id: 1},
    {name: 'eggs', recipe_id: 2},
    {name: 'salt', recipe_id: 2},
    {name: 'butter', recipe_id: 2},
    {name: 'honey', recipe_id: 2},
    {name: 'garlic powder', recipe_id: 2},
    {name: 'cayenne pepper', recipe_id: 2},
    {name: 'corn', recipe_id: 2},
    {name: 'salt', recipe_id: 3},
    {name: 'tomatoes', recipe_id: 3},
    {name: 'onions', recipe_id: 3},
    {name: 'bell peppers', recipe_id: 3},
    {name: 'mushrooms', recipe_id: 3},
    {name: 'cheese', recipe_id: 3},
    {name: 'cilantro', recipe_id: 3},
    {name: 'spinach', recipe_id: 3}
  ]);
};

