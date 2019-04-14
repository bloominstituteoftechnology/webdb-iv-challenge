
exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex('recipes').insert([
    {name: 'Devil\'s Food cake', instruction: 'mix the chocolate in with the vanilla, butter, brown sugar, flour, cinnamon and eggs', dish_id: 1},
    {name: 'Dublin\'s Buttered corn', instruction: 'mix in the salt, butter, honey, powder garlic and cayenne pepper in a bowl and glaze over the corn', dish_id: 2},
    {name: 'Renoir\'s Omelet du Fromage', instruction: 'mix in the eggs, salt, tomatoes, onions, tomatoes and mushrooms, fry the mixture, then add cheese, cilantro and spinach and flip the omelet onto itself', dish_id: 3}
  ]);
};
