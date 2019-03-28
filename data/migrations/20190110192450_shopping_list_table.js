exports.up = function(knex, Promise) {
    return knex.schema.createTable('shoppingList', table => {
        table.increments();
        table.integer('dish_id').unsigned();
        table.foreign('dish_id').references('id').on('dishes');
        table.string('ingredientName').notNullable();
        table.integer('ingredientQty').notNullable();
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('shoppingList');
  };