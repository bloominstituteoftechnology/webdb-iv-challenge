exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("instructions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("instructions").insert([
        { step_num: "1", step: "Mix ingredients", recipe_id: "1" },
        { step_num: "2", step: "Bake in oven", recipe_id: "1" },
        { step_num: "3", step: "Slice into pieces", recipe_id: "1" },
        { step_num: "1", step: "Fry in pan and FLIP", recipe_id: "2" },
        { step_num: "2", step: "Add salt and pepper", recipe_id: "2" },
        { step_num: "3", step: "Place onto plate", recipe_id: "2" },
        { step_num: "1", step: "Fry in pan NO FLIP", recipe_id: "3" },
        { step_num: "2", step: "Add salt and pepper", recipe_id: "3" },
        { step_num: "3", step: "Place onto plate", recipe_id: "3" },
        { step_num: "1", step: "Fry in pan SCRAMBLE", recipe_id: "4" },
        { step_num: "2", step: "Add salt and pepper", recipe_id: "4" },
        { step_num: "3", step: "Place onto plate", recipe_id: "4" },
        { step_num: "1", step: "Put stuff in Burrito", recipe_id: "5" },
        { step_num: "2", step: "Wrap", recipe_id: "5" },
        { step_num: "3", step: "Smother with chili", recipe_id: "5" },
        {
          step_num: "1",
          step: "Put everything stuff in Burrito",
          recipe_id: "6",
        },
        { step_num: "2", step: "Wrap", recipe_id: "6" },
        { step_num: "3", step: "Enjoy", recipe_id: "6" },
        { step_num: "1", step: "Mix ingredients", recipe_id: "7" },
        { step_num: "2", step: "Bake hot hot hot", recipe_id: "7" },
        { step_num: "3", step: "Cut into 8's and eat", recipe_id: "7" },
        { step_num: "1", step: "Mix ingredients for Dough", recipe_id: "8" },
        { step_num: "2", step: "Bake with american cheese", recipe_id: "8" },
        { step_num: "3", step: "Cut with knife and fork", recipe_id: "8" },
      ]);
    });
};
