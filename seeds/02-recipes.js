
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('002_recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('002_recipes').insert([
        { name: 'Tacos'},
        { name: 'Pho'},
        { name: 'Ramen'}
      ]);
    });
};
