
exports.up = function(knex, Promise) {
  return knex.schema.table('recipe', function(recipe){
      recipe.integer('dish_key');
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.table('recipe', function(recipe){
        recipe.dropColum('dish_key');
    })
};
