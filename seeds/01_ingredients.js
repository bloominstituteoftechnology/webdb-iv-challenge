exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { id: 1, name: "garlic", quantity: 4, recipe_id: 1 },
        { id: 2, name: "onions", quantity: 2, recipe_id: 1 },
        { id: 3, name: "sauce", quantity: 2, recipe_id: 2 },
        { id: 4, name: "bell peppers", quantity: 7, recipe_id: 3 }
      ]);
    });
};
