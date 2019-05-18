
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('Recipes')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Recipes').insert([
        { Name: 'Cheese Pizza', Dish_id: 1 },
        { Name: 'Pepperoni Pizza', Dish_id: 1 },
        { Name: 'Meat Lovers Pizza', Dish_id: 1 },

        { Name: 'Chicken Noodle Soup', Dish_id: 2 },
        { Name: 'Veggie Soup', Dish_id: 2 },
        { Name: 'Chili', Dish_id: 2 },

        { Name: 'Regular Burger', Dish_id: 3 },
        { Name: 'Cheese Burger', Dish_id: 3 },
        { Name: 'Spicy Burger', Dish_id: 3 }
      ]);
    });
};
