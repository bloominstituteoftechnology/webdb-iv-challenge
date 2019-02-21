
exports.up = function(knex, Promise) {
  return knex.schema.createTable('instructions_table', function(tbl){
      tbl.increments('instructions_id');
      tbl.text('instructions', 'longtext');
      tbl.int('recipe_id').unsigned()
      tbl.foreign('recipe_id').references('recipes.recipe_id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('instructions_table')
};
