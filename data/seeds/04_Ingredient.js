
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('Ingredients').insert([
        {ingredient_name: 'egg'},
        {ingredient_name: 'salt'},
        {ingredient_name: 'pepper'},
        {ingredient_name: 'salary'},
        {ingredient_name: 'carrot'},
        {ingredient_name: 'chicken breast'},
        {ingredient_name: 'green onion'},
        {ingredient_name: 'cilantro'},
        {ingredient_name: 'olive oil'}
      ]);
    });
};
