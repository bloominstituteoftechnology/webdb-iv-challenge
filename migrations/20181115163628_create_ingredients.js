
exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingredients', table => {
        table.increments();
        table.string('ingredient_name').notNullable();
        table.int('qty');
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('ingredients');
  };
