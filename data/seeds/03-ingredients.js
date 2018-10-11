
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {recipe_id: 1, quantity: 1, ingredient: 'Pound Ground Beef'},
        {recipe_id: 1, quantity: 1, ingredient: 'Medium onion, chopped'},
        {recipe_id: 1, quantity: 0.5, ingredient: 'teaspoon chili powder'},
        {recipe_id: 1, quantity: 0.5, ingredient: 'teaspoon salt'},
        {recipe_id: 1, quantity: 1, ingredient: 'teaspoon garlic powder'},
        {recipe_id: 1, quantity: 12, ingredient: 'cans (8oz) tomato sauce'},
        {recipe_id: 1, quantity: 1.5, ingredient: ' cups Old El Paso crunchy taco shells'},
        {recipe_id: 1, quantity: 2, ingredient: 'Cups shredded Cheddar Cheese (6oz)'},
        {recipe_id: 1, quantity: 0.75, ingredient: 'Cups shredded lettuce'},
        {recipe_id: 1, quantity: 0.75, ingredient: 'cup Old El Paso Thick n Chunky salsa'},
        {recipe_id: 2, quantity: 1, ingredient: 'Cup Long Grain White Rice'},
        {recipe_id: 2, quantity: 2, ingredient: 'Eggs, Lightly Beaten'},
        {recipe_id: 2, quantity: 1, ingredient: 'Tbsp Oil'},
        {recipe_id: 2, quantity: 100, ingredient: 'Grams Cooked Meat or Fish (Ham, Chicken, Prawns Etc) Chopped Finely'},
        {recipe_id: 2, quantity: 0.5, ingredient: 'Cups Mixed Vegetables'},
        {recipe_id: 2, quantity: 1, ingredient: 'Tbsp MAGGI Original Seasoning'},
      ]);
    });
};
