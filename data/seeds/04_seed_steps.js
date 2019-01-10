
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {description: 'desc', order_num: 1, recipe_id: 1},
        {description: 'desc', order_num: 1, recipe_id: 1},
        {description: 'desc', order_num: 1, recipe_id: 1},
        {description: 'desc', order_num: 1, recipe_id: 1},
        {description: 'desc', order_num: 1, recipe_id: 1},
        {description: 'desc', order_num: 1, recipe_id: 1},
        {description: 'desc', order_num: 1, recipe_id: 1},
        {description: 'desc', order_num: 1, recipe_id: 1},
        {description: 'desc', order_num: 1, recipe_id: 1},
        {description: 'desc', order_num: 1, recipe_id: 1},
        {description: 'desc', order_num: 1, recipe_id: 1},
        
      ]);
    });
};
