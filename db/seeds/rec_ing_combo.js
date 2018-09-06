
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('rec_ing_combo').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('rec_ing_combo').insert([
        {recipe_id: 1, ingredient_id: 1, amount: 2, units: 'cups'},
        {recipe_id: 1, ingredient_id: 6, amount: 2, units: 'liters'},
        {recipe_id: 1, ingredient_id: 2, amount: 2, units: '8-oz cans'},
        {recipe_id: 1, ingredient_id: 7, amount: 1-2, units: 'splashes'},
        {recipe_id: 1, ingredient_id: 5, amount: 2, units: 'packages'},
        {recipe_id: 1, ingredient_id: 11, amount: 1, units: 'cup'},
      ]);
    });
};
