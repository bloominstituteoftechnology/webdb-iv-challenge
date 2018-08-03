exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("recipes").insert([
        {
          dishes_id: 1,
          name: "Carne Asada Tacos"
        }
      ]);
    });
};
