
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, name: 'Vegan Banana Muffins', dish_id: 1},
        {id: 2, name: 'Vegan Mac and Cheese', dish_id: 2},
        {id: 3, name: 'Vegetable Stir Fry with Noodles', dish_id: 3}
      ]);
    });
};
