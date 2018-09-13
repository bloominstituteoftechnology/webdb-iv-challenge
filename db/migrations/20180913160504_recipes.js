exports.up = function(knex, Promise) {
    return knex.schema.createTable("recipes", function(table) {
      table.increments("id");
  
      table
        .string("name", 50)
        .notNullable()
        .unique("uq_recipe_name");
      table
        .integer("dish_id")
        .unsigned()
        .notNullable()
        .references("dish_id")
        .inTable("dishes");
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable("recipes");
  };

// knex migrate:make table_name
// knex migrate:latest
// knex migrate:rollback
