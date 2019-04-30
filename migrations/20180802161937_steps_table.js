exports.up = function(knex, Promise) {
  return knex.schema.createTable('steps', function(tbl) {
    tbl.increments('id').primary();
    tbl.integer('recipe_id').unsigned();
    tbl
      .foreign('recipe_id')
      .references('id')
      .inTable('recipes');
    tbl.integer('step_number').notNullable();
    tbl.string('description').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('steps');
};
