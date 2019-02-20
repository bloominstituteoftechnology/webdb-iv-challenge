
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', function(tbl) {
      tbl.increments();
      tbl.string('recipe_name').notNullable().unique();
      tbl.integer('dish_id').unsigned()
      table.foreign('dish_id').references('dishes.id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes')
};
