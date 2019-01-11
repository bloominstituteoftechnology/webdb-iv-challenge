
exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingredients'), table => {
        table.increments();
        table.string("ingredientName").notNullable();
        table.integer('Qty').notNullable();
    }
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('ingredients');
  };
