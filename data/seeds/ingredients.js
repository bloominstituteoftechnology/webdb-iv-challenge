
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { name: 'Meat' },
        { name: 'Mixed Veggies' },
        { name: 'Cheese' },
        { name: 'Noodles' },
        { name: 'Sauce' },
      ]);
    });
};
