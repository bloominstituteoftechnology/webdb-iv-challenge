
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'Tacos al Pastor', dishID: 2},
        {name: 'Beef Lasagna', dishID: 1},
        {name: 'Red Velvet Cake', dishID: 3},
        {name: 'Tacos de Carne Asada', dishID: 2},
        {name: '3 Cheese Lasagna', dishID: 1},
        {name: 'Carrot Cake', dishID: 3}
      ]);
    });
};
