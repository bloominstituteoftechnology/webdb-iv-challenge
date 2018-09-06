
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'Granny Tacos', dish_id: '1', ingredient_id: '1', quantity_id: '1'},
        {name: 'Granny Tacos', dish_id: '1', ingredient_id: '3', quantity_id: '3'},
        {name: 'Granny Tacos', dish_id: '1', ingredient_id: '2', quantity_id: '4'},
        {name: 'Granny Pizza', dish_id: '2', ingredient_id: '1', quantity_id: '2'},
        {name: 'Granny Pizza', dish_id: '2', ingredient_id: '2', quantity_id: '2'},
        {name: 'Granny Pizza', dish_id: '2', ingredient_id: '3', quantity_id: '1'},
        {name: 'Granny Pizza', dish_id: '2', ingredient_id: '4', quantity_id: '2'},
      
      ]);
    });
};