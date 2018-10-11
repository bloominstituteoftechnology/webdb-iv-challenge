
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { ingredient_id: 1,  name: "curry paste" },
        { ingredient_id: 2, name: "Angel Hair Pasta"},
        { ingredient_id: 3, name: "Bamboo shoots"}
      ]);
    });
};
