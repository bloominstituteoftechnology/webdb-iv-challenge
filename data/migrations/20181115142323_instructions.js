
exports.up = function(knex, Promise) {
  return knex.schema.createTable('instructions', function(tbl) {
    tbl.increments();

    tbl.string('step', 255).notNullable();

    tbl 
        .integer('step_number')
        .unsigned();

    tbl
        .integer('recipe_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('recipes');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('instructions');
};
