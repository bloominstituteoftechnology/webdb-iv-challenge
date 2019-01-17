
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'flatBread', },
        {name: 'southwest salmon'},
        {name: 'canadian steak'},
        {name: 'italiano spices'},
        {name: 'parmasean'},
      ]);
    });
};
