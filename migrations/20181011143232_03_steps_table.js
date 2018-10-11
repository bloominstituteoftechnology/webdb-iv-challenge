
exports.up = function(knex, Promise) {
  return knex.schema.createTable('steps', function(tbl) {
      tbl.increments();

      tbl.integer('step_number').notNullable();

      tbl
      .string('instructions')
      .notNullable()
      .references('step_number')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('steps');
};
