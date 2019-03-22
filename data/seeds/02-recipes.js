
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'Meatlovers Pizza'},
        {name: 'Three Cheese Pizza'},
        {name: 'Crunchy Beef Tacos'},
        {name: 'Street Tacos'}
      ]);
    });
};
