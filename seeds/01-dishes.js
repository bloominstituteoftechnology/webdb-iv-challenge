
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('001_dishes').del()
    .then(function () {
      // Inserts seed entries
      return knex('001_dishes').insert([
        { name: 'Pho'},
        { name: 'Tacos'},
        { name: 'Ramen'}
      ]);
    });
};
