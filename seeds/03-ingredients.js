
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('003_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('003_ingredients').insert([
        { name: 'Noodles'},
        { name: 'Taco Shell'},
        { name: 'Pack of Ramen'}
      ]);
    });
};
