exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', table => {
        table.increments();
        table.string('recipe_name').notNullable();
        table.int('dish_id');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('recipes');
  };
