exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("instructions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("instructions").insert([
        { step_num: "1", step: "Select cut of beef", recipe_id: "1" },
        { step_num: "2", step: "Put beef on grill", recipe_id: "1" },
        { step_num: "3", step: "Cook until desired length", recipe_id: "1" },
        { step_num: "1", step: "Crack eggs into frying pan", recipe_id: "2" },
        { step_num: "2", step: "flip once", recipe_id: "2" },
        { step_num: "1", step: "scrable eggs and pour into frying pan", recipe_id: "3" },
        { step_num: "2", step: "cook until done", recipe_id: "3" },
        { step_num: "1", step: "on two slices of bread add tomato bacon and lettuce", recipe_id: "4" },
        { step_num: "2", step: "cook in oven until hot", recipe_id: "4" },        
      ]);
    });
};