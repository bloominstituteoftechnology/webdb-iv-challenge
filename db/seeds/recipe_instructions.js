exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipe_instructions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipe_instructions").insert([
        { recipe_id: 1, step: 1, discription: "Do first thing" },
        { recipe_id: 1, step: 2, discription: "Mix some stuff" },
        { recipe_id: 1, step: 3, discription: "Put in oven" },

        { recipe_id: 2, step: 1, discription: "Do first thing" },
        { recipe_id: 2, step: 2, discription: "Mix some stuff" },
        { recipe_id: 2, step: 3, discription: "Put in oven" },

        { recipe_id: 3, step: 1, discription: "Do first thing" },
        { recipe_id: 3, step: 2, discription: "Mix some stuff" },
        { recipe_id: 3, step: 3, discription: "Put in oven" }
      ]);
    });
};
