
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe-ingredient').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe-ingredient').insert([
        {ingredient_id: 1, recipe_id: 1}
        // {name: 'rowValue2'},
        // {name: 'rowValue3'}
      ]);
    });
};
