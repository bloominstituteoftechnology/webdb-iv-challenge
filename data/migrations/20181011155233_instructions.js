exports.up = knex => {
  knex.schema.createTable('instructions', table => {
    table.increments();

    table
      .integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes');

    table
      .integer('step')
      .unsigned()
      .notNullable();
  });
};

exports.down = knex => knex.schema.dropTable('instructions');
