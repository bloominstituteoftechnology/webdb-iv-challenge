
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { name: "bean tortilla" },
        { name: "almond cheese" },
        { name: "black beans" },
        { name: "flour" },
        { name: "tomato" },
        { name: "water" },
        { name: "red onion" },
        { name: "celery" },
        { name: "carrot" },
        { name: "Jack Fruit" },
        { name: "soba" }
      ]);
    });
};
