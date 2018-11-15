
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, dish_id: 2, name: 'Pumpkin Pie'},
        {id: 2, dish_id: 1, name: 'Chocolate Milshake'},
        {id: 3, dish_id: 2, name: 'Pecan Pie'},
        {id: 4, dish_id: 3, name: 'Banana Bread Cupcakes'},
        /* {id: 3, dish_id: 1, name: 'Banana Milkshake'},
        {id: 3, dish_id: 3, name: 'Confetti Cupcakes'},
        {id: 3, dish_id: 2, name: 'Blueberry Pie'} */
      ]);
    });
};
