
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {recipe_id: 1, step_number: 1, step: 'Boil broth'},
        {recipe_id: 1, step_number: 2, step: 'Put noodles in broth'},
        {recipe_id: 1, step_number: 3, step: 'Slice up tofu and put in soup'},
        {recipe_id: 2, step_number: 1, step: 'Boil broth'},
        {recipe_id: 2, step_number: 2, step: 'Put noodles in broth'},
        {recipe_id: 2, step_number: 3, step: 'Slice up brisket and put in soup'},
        {recipe_id: 3, step_number: 1, step: 'Cube avocado and pineapple'},
        {recipe_id: 3, step_number: 2, step: 'Mix avocado and pineapple to make salsa'},
        {recipe_id: 3, step_number: 3, step: 'Pan fry tuna steak'},
        {recipe_id: 4, step_number: 1, step: 'Start grill'},
        {recipe_id: 4, step_number: 2, step: 'Grill tuna steak'},
        {recipe_id: 5, step_number: 1, step: 'Dice spinach, tomatoes, and leeks'},
        {recipe_id: 5, step_number: 2, step: 'Mix everything'},
        {recipe_id: 5, step_number: 3, step: 'Cook mixture into omelette'},
        {recipe_id: 6, step_number: 1, step: 'Dice ham and cheese'},
        {recipe_id: 6, step_number: 2, step: 'Mix everything'},
        {recipe_id: 6, step_number: 3, step: 'Fry that sucka'}
      ]);
    });
};
