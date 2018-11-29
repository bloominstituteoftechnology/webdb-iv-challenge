exports.seed = function(knex, Promise) {
  return knex('recipes').truncate()
  .then(function() {
    return knex('recipes').insert([
      {id: 1, name: 'hot dog', dishId: 1},
      {id: 2, name: 'hamburger', dishId: 2},
      {id: 3, name: 'cheeseburger', dishId: 3}
    ]);
  });
};