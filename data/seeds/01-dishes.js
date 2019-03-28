
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        {dishName: 'Lasagne'},
        {dishName: 'Tacos'},
        {dishName: 'Pasta'},
        {dishName: 'Pie'},
        {dishName: 'Pizza'},
      ]);
    });
};
