
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {recipe_id: 1, step_number: 1, description: 'crack 3 eggs'},
        {recipe_id: 1, step_number: 2, description: 'put 1 tbsp olive oil in a hot pan'},
        {recipe_id: 1, step_number: 3, description: 'put cheese and ham on top, cook for 5 min'},
        {recipe_id: 1, step_number: 4, description: 'spray some salt and pepper on eggs'},
        {recipe_id: 1, step_number: 5, description: 'put on plate and serve'},
        {recipe_id: 2, step_number: 1, description: 'boil pasta'},
        {recipe_id: 2, step_number: 2, description: 'shred cheese'},
        {recipe_id: 2, step_number: 3, description: 'cook sauce in pan'},
        {recipe_id: 2, step_number: 4, description: 'put sauce in pasta and oven'},
        {recipe_id: 2, step_number: 5, description: 'layer with cheese'},
        {recipe_id: 2, step_number: 6, description: 'cook for 1 hour'}
      ]);
    });
};
