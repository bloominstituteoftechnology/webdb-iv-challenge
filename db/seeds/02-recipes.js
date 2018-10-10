
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name: 'cheese-pizza', directions: "take oil, spread on dough, spread dough on pan, add sauce, add cheese, cook on 400 degress for 12 mins", dish_id: 1},
        {recipe_name: 'meatlovers-pizza', directions: "take oil, spread on dough, spread dough on pan, add sauce, add cheese, add meat, cook on 350 degress for 25 mins", dish_id: 1},
        {recipe_name: 'thincrust-pizza', directions: "take oil, spread on dough, spread dough on pan, add sauce, add cheese, add meat, cook on 320 degress for 15 mins", dish_id: 1},
        {recipe_name: 'cheesy-tacos', directions: 'boil shell for 10 mins in oil, let stand 5 mins, add cheese, add meat cooked', dish_id: 2},
        {recipe_name: 'regular-tacos', directions: 'boil shell for 10 mins in oil, let stand 5 mins, add cheese, add meat cooked', dish_id: 2},
      ]);
    });
};
