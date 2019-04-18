
exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex('recipes').insert([
    {name: 'Devil\'s Food cake', instructions: 'mix the chocolate in with the vanilla, butter, brown sugar, flour, cinnamon and eggs', dish_id: 1},
    {name: 'Red Velvet cake', instructions: 'mix in ', dish_id: 2},
    {name: 'Chocolate Moose cake', instructions: 'mix in ', dish_id: 3},
    {name: 'Dublin\'s Buttered corn', instructions: 'mix in the salt, butter, honey, garlic powder and cayenne pepper in a bowl and glaze over the corn', dish_id: 4},
    {name: 'Tennessee Corn on the cob', instruction: '', dish_id: 5},
    {name: 'Louisiana Corn bake', instruction: '', dish_id: 6},
    {name: 'Renoir\'s Omelet du Fromage', instructions: 'mix in the eggs, salt, tomatoes, onions, bell peppers and mushrooms, fry the mixture, then add cheese, cilantro and spinach and flip the omelet onto itself', dish_id: 7},
    {name: 'Classic Omelet', instruction: '', dish_id: 8},
    {name: 'Everything Omelet', instruction: '', dish_id: 9},
  ]);
};
