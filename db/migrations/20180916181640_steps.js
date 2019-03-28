
exports.up = function(knex, Promise) {
    return knex.schema.createTable('steps', (table) => {
        table.increments('id');

        table
            .integer('step_order')
            .notNullable();
  
        table
            .text('step_description')
            .notNullable();

        table
            .integer('recipe_id')
            .notNullable()
            .references('id')
            .inTable('recipes');
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('steps');
  };
