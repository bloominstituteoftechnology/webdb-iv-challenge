
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: 'Water-packed artichoke hearts', amount: 2.0, recipe_id: 1},
        {ingredient_name: 'Shredded cooked chicken', amount: 3.0, recipe_id: 1},
        {ingredient_name: 'Refrigerated spinach tortellini', amount: 3.0, recipe_id: 1},
        {ingredient_name: 'Mayonnaise', amount: 1.5, recipe_id: 1},
        {ingredient_name: 'Grated Asiago cheese', amount: 1.5, recipe_id: 1},
        {ingredient_name: 'Frozen corn thawed and drained', amount: 6.0, recipe_id: 2},
        {ingredient_name: 'Mayonnaise', amount: 1.0, recipe_id: 2},
        {ingredient_name: 'Ground chipotle pepper', amount: 1.0, recipe_id: 2},
        {ingredient_name: 'Salt', amount: .25, recipe_id: 2},
        {ingredient_name: 'Pepper', amount: .25, recipe_id: 2},
        {ingredient_name: 'Chopped green onions', amount: 6.0, recipe_id: 2},
        {ingredient_name: 'Grated parmesan cheese', amount: .5, recipe_id: 2},
        {ingredient_name: 'Lean ground beef', amount: 1.0, recipe_id: 3},
        {ingredient_name: 'Old El Paso Thick n Chunky salsa', amount: 1.0, recipe_id: 3},
        {ingredient_name: 'Old El Paso taco shells', amount: 10.0, recipe_id: 3},
        {ingredient_name: 'Shredded head lettuce', amount: .5, recipe_id: 3},
        {ingredient_name: 'Chopped tomato', amount: 1.0, recipe_id: 3},
        {ingredient_name: 'Shredded cheddar cheese', amount: 1.0, recipe_id: 3},
        {ingredient_name: 'Extra-virgin olive oil', amount: 1.0, recipe_id: 4},
        {ingredient_name: 'Boneless skinless chicken breasts', amount: 4.0, recipe_id: 4},
        {ingredient_name: 'Salt', amount: .1, recipe_id: 4},
        {ingredient_name: 'Ground black pepper', amount: .1, recipe_id: 4},
        {ingredient_name: 'Chili powder', amount: 2.0, recipe_id: 4},
        {ingredient_name: 'Cumin', amount: 2.0, recipe_id: 4},
        {ingredient_name: 'Garlic powder', amount: .5, recipe_id: 4},
        {ingredient_name: 'Paprika', amount: .25, recipe_id: 4},
        {ingredient_name: 'Cayenne', amount: .25, recipe_id: 4},
        {ingredient_name: 'Tortillas', amount: 8.0, recipe_id: 4},
        {ingredient_name: 'Sliced red onion', amount: 1.0, recipe_id: 4},
        {ingredient_name: 'Diced tomato', amount: 1.0, recipe_id: 4},
        {ingredient_name: 'Shredded monterey jack', amount: 1.0, recipe_id: 4}
      ]);
    });
};
