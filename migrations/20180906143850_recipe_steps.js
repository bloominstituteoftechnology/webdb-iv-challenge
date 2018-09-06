exports.up = function(knex, Promise) {
    return knex.schema.createTable("recipe_steps", function(table) {
      table.increments();
      table
        .string("step")
        .notNullable();
      table
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes");
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("recipe_steps");
  };
  