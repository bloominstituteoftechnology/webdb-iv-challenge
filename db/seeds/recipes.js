
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe: 'Tex-Mex Tacos', dish_id: '1'},
        {recipe: 'Spicy Chicken Tacos', dish_id: '1'},
        {recipe: 'Old-Fashioned Spaghetti', dish_id: '2'}
      ]);
    });
};
