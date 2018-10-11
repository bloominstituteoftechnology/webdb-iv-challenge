
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, name: 'Pepperoni Pizza', dish_id: 1},
        {id: 2, name: 'American Hamburger', dish_id: 2}
      ]);
    });
};
