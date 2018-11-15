
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: 'flour'},
        {ingredient_name: 'tomato sauce'},
        {ingredient_name: 'cheese'},
        {ingredient_name: 'basil'},
        {ingredient_name: 'fish'},
        {ingredient_name: 'steak'},
        {ingredient_name: 'pineapple'}
      ]);
    });
};
