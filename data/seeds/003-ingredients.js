
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {recipe_id: 1, 'weight/volume':'5g', name: 'rice'},
        {recipe_id: 1, 'weight/volume':'5g', name:'shrimp'},
        {recipe_id: 1, 'weight/volume':'5g', name:'scallion'}
      ]);
    });
};
