
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name:'Wood-fire Grilled Flank Steak', dishId: 1},
        {name:'Achiote Roasted Pork', dishId: 2},
        {name:'Wood-fire Grilled Portobello Mushrooms', dishId: 3},
      ]);
    });
};