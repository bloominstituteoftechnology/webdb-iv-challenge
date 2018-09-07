
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {step_number: 1, instruction: "Wait until water is boiling, then throw in prepackaged tortellini", recipe_id: 1},
        {step_number: 2, instruction: "Add tortellini to water and keep at boil for about 10 minutes", recipe_id: 1}, 
        {step_number: 3, instruction: "Drain water and add pesto", recipe_id: 1}, 
        {step_number: 1, instruction: "Wait until water is boiling, then add the spaghetti noodles", recipe_id: 2}, 
        {step_number: 2, instruction: "Cook until noodles are soft, then drain and add red sauce and meatballs", recipe_id: 2}, 
      ]);
    });
};
