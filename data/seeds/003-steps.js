
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('steps')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {ingredients_id: 8, recipe_id: 1, order: '1', step: 'Cook Hamburger Until Golden Brown'},
        {ingredients_id: 1, recipe_id: 1, order: '2', step: 'Insert Tomato Paste'},
        {ingredients_id: 2, recipe_id: 1, order: '3', step: 'Insert Noodles Into Pot Of Rolling Boiling Water'},
        {ingredients_id: 3, recipe_id: 2, order: '1', step: 'Cook 1 Cup of Rice In 3 Cups of Simmering Water'},
        {ingredients_id: 4, recipe_id: 3, order: '1', step: 'Boil Eggs'},
        {ingredients_id: 4, recipe_id: 3, order: '2', step: 'Cool Eggs'},
        {ingredients_id: 4, recipe_id: 3, order: '3', step: 'Peel Eggs'},
        {ingredients_id: 5, recipe_id: 3, order: '4', step: 'Chop Celery Into 1 x 1 x 1 cubic centimeters and place in salad'},
        {ingredients_id: 6, recipe_id: 3, order: '5', step: 'Chop pickles into 2 x 2 x 4 cubic rectangles and place in salad'},
        
        
      ]);
    });
};
