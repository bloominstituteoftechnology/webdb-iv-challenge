
exports.up = function(knex, Promise) {
  return knex.schema.createTable('instructions', function(tbl) {
    tbl.increments();

    tbl
      .string('instruction')
      .notNullable();

    tbl
      .integer('recipe_id')
      .notNullable();

    tbl
      .integer('step_number')
      .notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('instructions')
};
