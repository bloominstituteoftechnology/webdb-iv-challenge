
exports.up = function(knex, Promise) {
    return knex.schema.createTable('steps', table => {
        table.increments();
        table.string('step_desc', 500).notNullable();
        table.int('order').notNullable();
        table.int('recipe_id').notNullable();
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('steps');
  };
