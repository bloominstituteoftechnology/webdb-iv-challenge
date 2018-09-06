exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipe_box")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipe_box").insert([
        { id: 1, name: "chicken", steps: "cut chicken breast", dish_id: 1 },
        { id: 21, name: "bacon", steps: "cut garlic", dish_id: 2 },
        { id: 3, name: "pork", steps: "defrost", dish_id: 3 }
      ]);
    });
};
