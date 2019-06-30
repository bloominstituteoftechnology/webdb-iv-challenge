exports.up = knex => {
  knex.schema.createTable('instructions', table => {
    table.increments();
    table.integer('step_number').notNullable();
    table.string('step').notNullable();
    table
      .integer('recipe_id')
      .notNullable()
      .references('id')
      .inTable('recipes');
  });
};

exports.down = knex => knex.schema.dropTable('instructions');
