
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'spegettie sauce'},
        {id: 2, name: 'salsa'},
        {id: 3, name: 'elbow noodles'},
        {id: 4, name: 'spegetti noodles'},
        {id: 5, name: 'hambuger'},
        {id: 6, name: 'onions'},
        {id: 7, name: 'cilantro'},
        {id: 8, name: 'spicy italian'},
        {id: 9, name: 'mexican blend cheese'},
        {id: 10, name: 'bell peppers'}
      ]);
    });
};
