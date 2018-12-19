exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { name: "Dough" }, // 1
        { name: "Pepperoni" }, // 2
        { name: "Mozzarella" }, // 3
        { name: "Noodles" }, // 4
        { name: "Sausage" }, // 5
        { name: "Zucchini" }, // 6
        { name: "Beans" }, // 7
        { name: "Corn" }, // 8
        { name: "Chicken" }, // 9
        { name: "Turkey" }, // 10
        { name: "Buns" } // 11
      ]);
    });
};
