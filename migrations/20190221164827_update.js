
exports.up = function(knex, Promise) {
  return knex.schema.table('recipe_ingredients', function(tbl){
      tbl.int('quantity')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipe_ingredients')
};
