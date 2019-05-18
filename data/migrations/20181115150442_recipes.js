
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', function(tbl) {
      tbl.increments();
      tbl.string('name', 255).unique().notNullable();

      tbl
        .integer('dish_id')
        .unsigned()
        .references('id')
        .inTable('dish');

      tbl
        .integer('steps_id')
        .unsigned()
        .references('id')
        .inTable('steps');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes');
};
