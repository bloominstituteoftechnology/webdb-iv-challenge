exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipies_ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipies_ingredients").insert([
        { recipie_id: 1, ingredients_id: 1 },
        { recipie_id: 1, ingredients_id: 2 },
        { recipie_id: 1, ingredients_id: 3 }
      ]);
    });
};
