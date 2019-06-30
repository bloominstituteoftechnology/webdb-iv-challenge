
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe').insert([
        {recipe_name: 'italian', dish_key: 1},
        {recipe_name: 'indian', dish_key: 2}, 
        {recipe_name: 'southern', dish_key: 3}
      ]);
    });
};
