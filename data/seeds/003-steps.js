
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {id: 1, order: 1, recipe_id: 1 , description: 'Season crust and place crust in pan'},
        {id: 2, order: 2, recipe_id: 1, description: 'Add water and desired flavoring to pie filling powder; stir'},
        {id: 3, order: 3, recipe_id: 1, description: 'Bake at 300 degrees for 50 minutes'},
        {id: 4, order: 4, recipe_id: 1, description: 'Cover with whipped cream'},
        {id: 5, order: 1, recipe_id: 2, description: 'Add ice cream and milk to blender'},
        {id: 6, order: 2, recipe_id: 2, description: 'Blend'},
        {id: 7, order: 3, recipe_id: 2, description: 'Enjoy!'},
        {id: 8, order: 1, recipe_id: 3, description: 'Season crust and place crust in pan'},
        {id: 9, order: 2, recipe_id: 3, description: 'Add pecans to pie filling and place in pan'},
        {id: 10, order: 3, recipe_id: 3, description: 'Bake at 300 degrees for 50 minutes'},
        {id: 11, order: 1, recipe_id: 4, description: 'Mash up a batch of mature bananas'},
        {id: 12, order: 2, recipe_id: 4, description: 'Add water and flour'},
        {id: 13, order: 3, recipe_id: 4, description: 'Add mixture to cupcake mold; bake.'},
        {id: 14, order: 4, recipe_id: 4, description: 'Add icing'}
      ]);
    });
};
