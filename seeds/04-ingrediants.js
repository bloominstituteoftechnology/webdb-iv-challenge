
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingrediants').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingrediants').insert([
        {ingredient_name: 'egg'},
        {ingredient_name: 'salt'},
        {ingredient_name: 'pepper'},
        {ingredient_name: 'cheese'},
        {ingredient_name: 'ham'},
        {ingredient_name: 'pasta'},
        {ingredient_name: 'tomato sauce'},
        {ingredient_name: 'milk'},
        {ingredient_name: 'olive oil'}
      ]);
    });
};
