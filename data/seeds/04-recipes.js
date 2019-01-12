
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {Recipe_Name: 'Fuzzys', Dish_Id: 1},
        {Recipe_Name: 'Torchys', Dish_Id: 1},
        {Recipe_Name: 'Dominos', Dish_Id: 2},
        {Recipe_Name: 'Pizza Hut', Dish_Id: 4},
        {Recipe_Name: 'Ramen', Dish_Id: 3}
      ]);
    });
};
