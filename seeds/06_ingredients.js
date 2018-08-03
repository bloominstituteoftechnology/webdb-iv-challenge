
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {recipe_id: 1, ingredient_id: 1, ingredient_quantity: "1 tablespoon",measurement_unit: "imperial"},
        {recipe_id: 1, ingredient_id: 2, ingredient_quantity: "1/4 tablespoon",measurement_unit: "imperial"},
        {recipe_id: 1, ingredient_id: 3, ingredient_quantity: "1 tablespoon",measurement_unit: "imperial"},
        {recipe_id: 2, ingredient_id: 3, ingredient_quantity: "3 ounce",measurement_unit: "imperial"},
        {recipe_id: 2, ingredient_id: 2, ingredient_quantity: "1/2 tablespoon",measurement_unit: "imperial"},
        {recipe_id: 2, ingredient_id: 1, ingredient_quantity: "2 tablespoon",measurement_unit: "imperial"},        
      ]);
    });
};
