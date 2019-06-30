
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Ingredients').insert([
        { ingredientName: 'mozarella'},
        { ingredientName: 'tomato sauce'},
        { ingredientName: 'beer'}
      ]);
    });
};
