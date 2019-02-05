exports.up = function(knex, Promise) {
    return knex.schema.createTable('instructions', table => {
        table.increments();
        table.string('instructions').notNullable();
        table.integer('order').unsigned();
        table.integer('recipe_id').unsigned();
        table.foreign('recipe_id').references('id').on('recipes');
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('instructions');
  };