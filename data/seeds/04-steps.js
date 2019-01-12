
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {stepID: 1,recipe_id: 1,ingredient_id: 1,ingredient_qty: 1.0,ingredient_unit: 'pound'},
        {stepID: 1,recipe_id: 2,ingredient_id: 1,ingredient_qty: 1.0,ingredient_unit: 'cup'},
        {stepID: 1,recipe_id: 3,ingredient_id: 6,ingredient_qty: 0.5,ingredient_unit: 'pound'},
        {stepID: 2,recipe_id: 1,ingredient_id: 6,ingredient_qty: 1.0,ingredient_unit: 'pound'},
        {stepID: 2,recipe_id: 4,ingredient_id: 2,ingredient_qty: 2.0,ingredient_unit: 'pound'},
        {stepID: 3,recipe_id: 5,ingredient_id: 5,ingredient_qty: 2.0,ingredient_unit: 'cups'},
        {stepID: 3,recipe_id: 1,ingredient_id: 3,ingredient_qty: 2.0,ingredient_unit: 'Tbsp'},
        {stepID: 4,recipe_id: 8,ingredient_id: 9,ingredient_qty: 20.0,ingredient_unit: 'shells'},
        {stepID: 4,recipe_id: 1,ingredient_id: 8,ingredient_qty: 1.0,ingredient_unit: 'cup'}
      ]);
    });
};
