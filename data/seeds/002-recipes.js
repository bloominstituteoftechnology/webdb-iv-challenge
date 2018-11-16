exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        {dish_id: 1, name: "suadero"},
        {dish_id: 1, name: "adobada"},
        {dish_id: 2, name: "asada"},
        {dish_id: 2, name: "buche"},
        {dish_id: 3, name: "lengua"},
        {dish_id: 3, name: "cabeza"}
      ]);
    });
};
