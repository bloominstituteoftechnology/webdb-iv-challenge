exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes_directions")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("recipes_directions").insert([
        { recipes_id: 1, directions_id: 1 },
        { recipes_id: 1, directions_id: 2 },
        { recipes_id: 1, directions_id: 3 },
        { recipes_id: 1, directions_id: 4 }
      ]);
    });
};
