
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'Pumpkin Pie Filling'},
        {id: 2, name: 'Water'},
        {id: 3, name: 'Flavored Ice Cream'},
        {id: 4, name: 'Pecans'},
        {id: 5, name: 'Pecan Pie Filling'},
        {id: 6, name: 'Whipped Cream'},
        {id: 7, name: 'Icing'},
        {id: 8, name: 'Flour'},
        {id: 9, name: 'Bananas'},
        {id: 10, name: 'Pie Crust'}
      ]);
    });
};
