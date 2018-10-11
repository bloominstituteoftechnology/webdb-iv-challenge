exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { name: "corn tortilla" },
        { name: "cheese" },
        { name: "beans" },
        { name: "flour" },
        { name: "tomato" },
        { name: "water" },
        { name: "onion" },
        { name: "celery" },
        { name: "carrot" },
        { name: "chicken" },
        { name: "noodles" }
      ]);
    });
};
