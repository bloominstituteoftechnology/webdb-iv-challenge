exports.up = function(knex, Promise) {
  return knex.schema.createTable('instructions', (table) => {
    table.increments();
    table.integer('step_order').unsigned();
    table.string('step', 160);
    table
      .integer('ingredient_id')
      .unsigned()
      .references('id')
      .inTable('ingredients');
    table.float('ingredient_amount');
    table
      .integer('recipe_id')
      .unsigned()
      .references('id')
      .inTable('recipes');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('instructions');
};
