
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'Mozzarella Cheese', quantity: '3'},
        {name: 'Lettuce', quantity: '1'},
        {name: 'Kidney Beans', quantity: '0.5'}
      ]);
    });
};
