
exports.up = function(knex, Promise) {
  return knex.schema.createTable('instructions', function(tbl) {
      tbl.increments();
      tbl.integer('step_num');
      tbl.string('description').notNullable();
      tbl.integer('recipe_id').unsigned();
      tbl.foreign('recipe_id').references('recipes.id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('instructions');
};
