exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipe_instructions', table => {
    table
      .integer('recipe_id')
      .notNullable()
      .references('id')
      .inTable('recipes');
    table.integer('step').unsigned();
    table.string('description').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('recipe_instructions');
};
