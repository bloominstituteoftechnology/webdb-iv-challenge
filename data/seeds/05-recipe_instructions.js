
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe_instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_instructions').insert([
        {recipe_id: 1, instructions: 'Lay the flour tortila out, put the pinto beans and chicken in.'},
        {recipe_id: 2, instructions: 'Put the mayo on the bread and add cheese.'},
        {recipe_id: 3, instructions: 'Flatten the pizza dough add the red sauce and pepperoni and cheese then bake.'},
      ]);
    });
};
