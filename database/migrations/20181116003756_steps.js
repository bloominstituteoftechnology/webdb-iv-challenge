exports.up = (knex, Promise) => {
  return knex.schema.createTable('steps', tbl => {
    tbl.increments();
    tbl
      .integer('recipe_id')
      .unsigned()
      .references('id')
      .inTable('recipes');
    tbl
      .integer('step_order')
      .unsigned()
      .notNullable();
    tbl.string('step', 510).notNullable();
  });
};

exports.down = (knex, Promise) => knex.schema.dropTableIfExists('steps');
