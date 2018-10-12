
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredient_names').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredient_names').insert([
        {id: 1, ingredient_name: 'bread'},
        {id: 2, ingredient_name: 'butter'},
        {id: 3, ingredient_name: 'sugar'},
        {id: 4, ingredient_name: 'spice'},
        {id: 5, ingredient_name: 'brains'},
        {id: 6, ingredient_name: 'everything nice'},
        {id: 7, ingredient_name: 'purple'},
        {id: 8, ingredient_name: 'square'},
        {id: 9, ingredient_name: 'water'},
      ]);
    });
};
