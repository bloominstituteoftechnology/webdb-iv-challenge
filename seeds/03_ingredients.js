
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
       {
        id: 1,
        name: 'Cheese Pizza',
        text: '1 pizza dough, pizza sauce, cheese'
      },
        {
        id: 2,
        name: 'Ham Sandwich',
        text: 'Bread, Ham, Cheese, Mayo'
      },

      ]);
    });
};
