
exports.up = function(knex, Promise) {
    return knex.schema.table('recipes', function (recipe) {
        recipe.string('directions', 1000);
        
      })
};

exports.down = function(knex, Promise) {
 return knex.schema.table('recipes'), function(recipe){
      recipe.dropColumn('directions')
  }
};
