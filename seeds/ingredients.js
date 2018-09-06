
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { ingredient_id: 1,  name: "noodles" },
        { ingredient_id: 2, name: "sauce"},
        { ingredient_id: 3, name: "fish"}
      ]);
    });
};
