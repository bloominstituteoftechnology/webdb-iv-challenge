
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { name: 'Chicago Deep Dish'},
        { name: 'Margherita'},
        { name: 'Chicken Cordon Bleu'}
      ]);
    });
};
