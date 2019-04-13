
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'Ground Turkey'},
        {name: 'Cauliflower'},
        {name: 'Chili Powder'},
        {name: 'Cumin'},
        {name: 'Jalepenos'},
        {name: 'Cheese'},
        {name: 'Sriracha'},
      ]);
    });
};
