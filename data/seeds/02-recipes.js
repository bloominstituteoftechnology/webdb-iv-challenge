
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { recipe_name: 'Spicy Chicken Tacos', instructions: 'Make Chicken Tacos', dish_id: 1 },
        { recipe_name: 'Meatloaf Burgers', instructions: 'Make Burgers.  Cook them', dish_id: 2 },
        { recipe_name: 'Tortilla Pizzas', instructions: 'Grab pizza ingredient.  Put Ingredients on tortillas.  Cook in oven.', dish_id: 3 },
        { recipe_name: 'Riceless Stir-fry', instructions: 'Cook vegetables in pan.  Cooked chicken in oven.  Combine and eat.', dish_id: 4 },
        { recipe_name: 'Morning Oatmeal', instructions: 'Cook oatmeal in pan.  Chop up berries and bannana.  Combine and add hemp, chia, and flax seeds. Enjoy.', dish_id: 5 },
        { recipe_name: 'Pepperoni Pizza', instructions: 'Create pizza dough.  Add sauce, cheese, pepperonis, and any vegetables.  Cook in oven.', dish_id: 3 },
        { recipe_name: 'Traditional Stir-fry', instructions: 'Cook vegetables in pan.  In a seperate pan cook rice.  Combine and enjoy.', dish_id: 4 }
      ]);
    });
};
