
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {
          dish_id: 7, 
          recipe: 'Miso Honey Salmon',
          steps: 'Cook it'
        },
        {
          dish_id: 7, 
          recipe: 'Mesquite Salmon',
          steps: 'Cook it'
        },
        {
          dish_id: 8, 
          recipe: 'Lemon Rosemary Whole Chicken',
          steps: 'Cook it'
        },
        {
          dish_id: 8, 
          recipe: 'Spicy Chicken Wings',
          steps: 'Cook it'
        },
        {
          dish_id: 9, 
          recipe: 'Maple Sweet Potatoes',
          steps: 'Cook it'
        },
        {
          dish_id: 9, 
          recipe: 'Sweet Potato Hash',
          steps: 'Cook it'
        }
      ]);
    });
};
