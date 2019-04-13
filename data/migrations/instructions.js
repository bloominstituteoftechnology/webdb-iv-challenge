exports.up = function(knex, Promise) {
    return knex.schema.createTable('instructions', function(tbl) {
      tbl.increments();
  
      tbl.integer('step_number').notNullable();
  
      tbl.string('step').notNullable();
  
      tbl
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('instructions');
  };
