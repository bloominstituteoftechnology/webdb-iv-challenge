exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipies')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('recipies').insert([
        { name: 'Spicy Chicken Noodle', dish_id: 1 },
        { name: 'Salmon Ramen Noodle', dish_id: 1 },
        { name: 'Traditional', dish_id: 2 },
        { name: 'Tex Mex', dish_id: 2 },
        { name: 'Spagetti', dish_id: 3 },
        { name: 'Alfrado', dish_id: 3 },
        { name: 'Deep Dish', dish_id: 4 },
        { name: 'Thin Crust', dish_id: 4 },
        { name: 'Tomato', dish_id: 1 },
        { name: 'Veggie', dish_id: 2 }
      ]);
    });
};
