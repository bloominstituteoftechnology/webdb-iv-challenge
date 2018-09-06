exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('ingredients').insert([
        { name: 'Ahi' },
        { name: 'Corn Tortilla' },
        { name: 'Tomatoes' },
        { name: 'Flour' },
        { name: 'Mozzarella' },
        { name: 'Chuck Roast' },
        { name: 'Beef Stock' },
      ]);
    });
};
