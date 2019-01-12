exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredient').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredient').insert([
        {ingredient: 'mozzarella'},
        {ingredient: 'pepperoni'},
        {ingredient: 'pizza crust'},
        {ingredient: 'pizza sauce'},
        {ingredient: 'ground beef'},
        {ingredient: 'burger bun'},
        {ingredient: 'bacon'},
        {ingredient: 'american cheese'}
      ]);
    });
};