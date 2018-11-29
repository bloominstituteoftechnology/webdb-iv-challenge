
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name:'Wood-fire Grilled Flank Steak', dishId: 1},
        {name:'Queso Fresco', dishId: 1},
        {name:'Avocado Serrano Sauce', dishId: 1},
        {name:'Achiote Roasted Pork', dishId: 2},
        {name:'Blood Orange Habenero Sauce', dishId: 2},
        {name:'Smashed Black Beans', dishId: 2},
        {name:'Wood-fire Grilled Portobello Mushrooms', dishId: 3},
        {name:'Crispy Onions', dishId: 3},
        {name:'Huitlacoche Aioli', dishId: 3},
      ]);
    });
};
