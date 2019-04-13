
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        { step_number: '1', step: 'Grab buns', recipe_id: '1' },
        { step_number: '2', step: 'Cook patty', recipe_id: '1' },
        { step_number: '3', step: 'Put patty between buns', recipe_id: '1' },
        { step_number: '1', step: 'Grab the buns', recipe_id: '2' },
        { step_number: '2', step: 'Cook the patty', recipe_id: '2' },
        { step_number: '3', step: 'Put cheese on cooked patty', recipe_id: '2' },
        { step_number: '4', step: 'Put patty between buns', recipe_id: '2' },
        { step_number: '1', step: 'Flatten out the dough to your desired shape', recipe_id: '3' },        
        { step_number: '2', step: 'Spread marinara on the dough', recipe_id: '3' },
        { step_number: '3', step: 'Spread cheese on the dough', recipe_id: '3' },
        { step_number: '4', step: 'Place pepperoni upon the marinara', recipe_id: '3' },
        { step_number: '5', step: 'After pre-heating oven to 400 degrees, cook the pizza until cheese is melted and crust is golden brown', recipe_id: '3' },
        { step_number: '1', step: 'Flatten out the dough to your desired shape', recipe_id: '4' },
        { step_number: '2', step: 'Spread marinara on the dough', recipe_id: '4' },
        { step_number: '3', step: 'Spread cheese on the dough', recipe_id: '4' },
        { step_number: '4', step: 'Place ham and pineapple upon the marinara', recipe_id: '4' },
        { step_number: '5', step: 'After pre-heating oven to 400 degrees, cook the pizza until cheese is melted and crust is golden brown', recipe_id: '4' },
      ]);
    });
};
