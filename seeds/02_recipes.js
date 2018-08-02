
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {
          dish_id: 1, 
          recipe: 'Miso Honey Salmon'
        },
        {
          dish_id: 1, 
          recipe: 'Mesquite Salmon'
        },
        {
          dish_id: 2, 
          recipe: 'Lemon Rosemary Whole Chicken'
        },
        {
          dish_id: 2, 
          recipe: 'Spicy Chicken Wings'
        },
        {
          dish_id: 3, 
          recipe: 'Maple Sweet Potatoes'
        },
        {
          dish_id: 3, 
          recipe: 'Sweet Potato Hash'
        }
      ]);
    });
};
