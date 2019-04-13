
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', function(tbl){
      tbl.increments('recipe_id');
      tbl.string('recipe_name', 60).unique().notNullable();
      tbl.int('dish_id').unsigned().notNullable();
      tbl.foreign('dish_id').references('dishes.dish_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes')
};
