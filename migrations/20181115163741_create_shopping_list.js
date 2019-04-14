exports.up = function(knex, Promise) {
    return knex.schema.createTable('shopping_lists', table => {
        table.increments();
        table.int('dish_id').notNullable();
        table.int('recipe_id').notNullable();
        table.string('ingredient_name').notNullable();
        table.int('ingredient_qty').notNullable();
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('shopping_lists');
  };
