exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 0, name: 'al pastor', dishId: 0},
        {id: 1, name: 'carnitas', dishId: 0},
        {id: 2, name: 'barbacoa', dishId: 0},
        {id: 3, name: 'beef and vegetable', dishId: 1},
        {id: 4, name: 'keema', dishId: 1},
        {id: 5, name: 'tonkatsu', dishId: 1},
        {id: 6, name: 'bolognese', dishId: 2},
        {id: 7, name: 'carbonara', dishId: 2},
        {id: 8, name: 'arrabiata', dishId: 2}
      ]);
    });
};
