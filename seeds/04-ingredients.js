
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: 'pizza doe'},
        {ingredient_name: 'maranara'},
        {ingredient_name: 'cheese'},
        {ingredient_name: 'Spam'},
        {ingredient_name: 'bread'},
        {ingredient_name: 'penut butter'},
        {ingredient_name: 'jelly'}
      ]);
    });
};
