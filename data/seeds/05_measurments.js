
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('measurements').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('measurements').insert([
        {quantity: 2 , units: 'pounds', recipe_id:2 , ingredient_id: 1},
        {quantity: 3 , units: 'cloves', recipe_id:2 , ingredient_id: 2 },
        {quantity: 2, units: 'stalks', recipe_id:2,  ingredient_id: 3},
        {quantity: 2, units: 'teaspoons', recipe_id: 2, ingredient_id:4 },
        {quantity: 1, units: 'tablespoon', recipe_id:2 , ingredient_id:5 },
        {quantity: 1,  units: 'juiced', recipe_id:2 , ingredient_id: 6},
        {quantity: 2,  units: 'cups', recipe_id:2 , ingredient_id: 7},
        {quantity: 2,  units: 'tablespoons', recipe_id:2 , ingredient_id:8 },
        {quantity: 10, units: 'rings', recipe_id: 3, ingredient_id: 9},
        {quantity: 1.5, units: 'cups', recipe_id: 3, ingredient_id:5 },
        {quantity:.75,  units: 'cups', recipe_id: 3, ingredient_id:10 },
        {quantity: 1.5 , units: 'teaspoons', recipe_id:3 , ingredient_id:20 },
        {quantity: .25, units: 'teaspoon', recipe_id:3 , ingredient_id:21 },
        {quantity:.50 , units: 'cup', recipe_id:3 , ingredient_id: 19},
        {quantity: 2, units: 'whole', recipe_id:3, ingredient_id: 15},
        {quantity:.50 , units: 'cup', recipe_id:3 , ingredient_id:18 },
        {quantity: .25, units: 'melted', recipe_id: 3, ingredient_id:17 },
        {quantity: 1, units: 'teaspoon', recipe_id: 3, ingredient_id: 16},
        {quantity: 1 , units: 'large', recipe_id: 1, ingredient_id:11 },
        {quantity: 1, units: '5 Ounce', recipe_id: 1, ingredient_id: 12},
        {quantity: .50, units: 'cup', recipe_id:1 , ingredient_id:13 },
        {quantity: 2, units: 'cups', recipe_id:1 , ingredient_id: 14},
        {quantity: 1, units: '8 Ounce', recipe_id:1 , ingredient_id:9 },
      ]);
    });
};
