
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, quantity: 16, units: "oz", ingredient_id: 1, recipe_id: 1},
        {id: 2, quantity: 16, units: "oz", ingredient_id: 1, recipe_id: 2},
        {id: 3, quantity: 16, units: "oz", ingredient_id: 1, recipe_id: 3},
        {id: 4, quantity: 8, units: "oz", ingredient_id: 6, recipe_id: 1},
        {id: 5, quantity: 8, units: "oz", ingredient_id: 5, recipe_id: 2},
        {id: 6, quantity: 8, units: "oz", ingredient_id: 4, recipe_id: 3},
        {id: 7, quantity: 16, units: "oz", ingredient_id: 2, recipe_id: 4},
        {id: 8, quantity: 8, units: "oz", ingredient_id: 2, recipe_id: 5},
        {id: 9, quantity: 8, units: "oz", ingredient_id: 7, recipe_id: 5},
        {id: 10, quantity: 8, units: "oz", ingredient_id: 8, recipe_id: 5},
        {id: 11, quantity: 8, units: "oz", ingredient_id: 3, recipe_id: 6},
        {id: 12, quantity: 2, units: "oz", ingredient_id: 9, recipe_id: 6},
      ]);
    });
};
