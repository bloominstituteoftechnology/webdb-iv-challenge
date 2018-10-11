exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        { name: "bean taco", dish_id: 1 },
        { name: "cheese pizza", dish_id: 2 },
        { name: "noodle soup", dish_id: 3 }
      ]);
    });
};
