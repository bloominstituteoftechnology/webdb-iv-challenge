
exports.seed = function(knex, Promise) {
  return knex('recipes').del()
    .then(() => {
      return knex('recipes').insert([
        {name: 'Devil\'s Food cake', instructions: 'madd ', dish_id: 1},
        {name: 'Red Velvet cake',instructions: 'edddd',  dish_id: 2},
        {name: 'Chocolate Moose cake', instructions: 'mix in ', dish_id: 3},
        {name: 'Dublin\'s Buttered corn',instructions: 'eddd',  dish_id: 4},
        {name: 'Tennessee Corn on the cob',instructions: 'eddddddd',  dish_id: 5},
        {name: 'Louisiana Corn bake', instructions: 'esedddd', dish_id: 6},
        {name: 'Renoir\'s Omelet du Fromage', instructions: 'eaddd', dish_id: 7},
        {name: 'Classic Omelet', instructions: 'eddddd', dish_id: 8},
        {name: 'Everything Omelet', instructions: 'eaddd', dish_id: 9},
      ]);
    })
};
