
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, name: 'pork belly', dishId: 1},
        {id: 2, name: 'bolognese', dishId: 2},
        {id: 3, name: 'chilli cheese', dishId: 3}
      ]);
    });
};
