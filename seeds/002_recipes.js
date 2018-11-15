exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        {
          name: "New York Cheesecake",
          "dish id": 3,
          directions:
            "1: Add sugar, flour, cream cheese, vanila, eggs. 2: Stir, pour in pan. 3: Bake"
        },
        {
          name: "Chicago Stuffed Pizza",
          "dish id": 1,
          directions:
            "1: Spend forever making dough. 2: Spend 2 hours making sauce. 3: Spend forever laying dough over your dish. 4: Add topings, add sauce, add more topings. 5: Bake"
        },
        {
          name: "Deep Fried Lasagna",
          "dish id": 2,
          directions: "1: Make Lasagna. 2: Drop in deep fryer. 3: Enjoy?"
        }
      ]);
    });
};
