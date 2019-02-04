
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: "grandma's omellette", dish_id: 1,directions:'fsdafaa'},
        {name: "Farmer's omellette", dish_id: 1,directions:'farmer desc'},
        {name: "Figgy Pudding", dish_id: 2,directions:'figgy desc'},
        {name: "Vanilla Pudding", dish_id: 2,directions:'van desc'},
        {name: "Blood Pudding", dish_id: 2,directions:'blood desc'},
        {name: "Pepperoni Pizza", dish_id: 3,directions:'fsdafaa'},
        {name: "White Pizza", dish_id: 3,directions:'fsdafaa'},
        {name: "Chicago Pizza", dish_id: 3,directions:'fsdafaa'},
        {name: "Sweet Swine", dish_id: 3,directions:'fsdafaa'},
        {name: "Cheeseburger", dish_id: 4,directions:'fsdafaa'},
        {name: "Bacon Cheeseburger", dish_id: 4,directions:'fsdafaa'},
        {name: "Tuna Casserole", dish_id: 5,directions:'fsdafaa'},
        {name: "Vegetable Casserole", dish_id: 5,directions:'fsdafaa'},
        {name: "Everything Casserole", dish_id: 5,directions:'fsdafaa'},
        {name: "Shrimp Stir Fry", dish_id: 6,directions:'fsdafaa'},
        {name: "Pork Stir Fry", dish_id: 6,directions:'fsdafaa'},
        {name: "Veggie Stir Fry", dish_id: 6,directions:'fsdafaa'},
      ]);
    });
};
