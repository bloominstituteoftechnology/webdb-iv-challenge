exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { name: "pounds ground beef" }, //1
        { name: "pounds raccoon meat" }, //2
        { name: "cups cheese" }, //3
        { name: "taco shells" }, //4
        { name: "pounds beef ribs" }, //5
        { name: "pounds pork ribs" }, //6
        { name: "cups BBQ sauce" }, //7
        { name: "ounces dough" }, //8
        { name: "cups tomato sauce" }, //9
        { name: "pepperoni slices" } //10
      ]);
    });
};
