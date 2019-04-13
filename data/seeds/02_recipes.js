
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name: "Aunt Mae's Famous Tacos",
          dish_id: 1},
        {recipe_name: "Corey's Delicious Pizza",
          dish_id: 2}
      ]);
    });
};
