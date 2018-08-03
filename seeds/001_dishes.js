
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes').del()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        {id: 1, name: 'rellenos'},
        {id: 2, name: 'taco'},
        {id: 3, name: 'quesadilla'}
      ]);
    });
};
