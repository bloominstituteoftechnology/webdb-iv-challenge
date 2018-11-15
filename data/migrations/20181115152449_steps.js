
exports.up = function(knex, Promise) {
  return knex.schema.createTable('steps', function(tbl) {
      tbl
        .integer('recipe_id')
        .unsigned()
        .references('id')
        .inTable('recipes');
    
      tbl.integer('step_num');
      tbl.string('step', 255);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('steps');
};
