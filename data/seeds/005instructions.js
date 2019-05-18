exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("instructions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("instructions").insert([
        {
          recipie_id: 1,
          first_step: 2,
          second_step: 4,
          third_step: 1,
          forth_step: 3
        }
      ]);
    });
};
