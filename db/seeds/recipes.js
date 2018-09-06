
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('receipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('receipes').insert([
        { name: 'Ahi Tuna Taco', dish_id: 1},
        { name: 'Neopolitan Pizza', dish_id: 2},
        { name: 'Pressure Cooker Beef Stew', dish_id: 3}
      ]);
    });
};
