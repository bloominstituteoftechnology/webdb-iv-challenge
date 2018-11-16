exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  // truncate resets the ids back to 1
  return knex('dishes')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('dishes').insert([{ name: 'Pancakes' }, { name: 'Sandwiches' }, { name: 'Tacos' }]);
    });
};
