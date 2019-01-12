
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient: 'beef'},
        {ingredient: 'chicken'},
        {ingredient: 'salt'},
        {ingredient: 'pepper'},
        {ingredient: 'sugar'},
        {ingredient: 'tomatoes'},
        {ingredient: 'noodles'},
        {ingredient: 'ketchup'},
        {ingredient: 'taco shells'}
      ]);
    });
};
