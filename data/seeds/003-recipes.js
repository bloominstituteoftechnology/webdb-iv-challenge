
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe')
  .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe').insert([
        { recipe: 'la pizzaria', dish_id: 1 },
        { recipe: 'dreamy salad', dish_id: 2 },
        { recipe: 'silky smoothie', dish_id: 3 }
      ]);
    });
};
