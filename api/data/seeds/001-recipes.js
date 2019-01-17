
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'margherita'},
        {name: 'pepperoni'},
        {name: 'deep_dish'}
      ]);
    });
};
