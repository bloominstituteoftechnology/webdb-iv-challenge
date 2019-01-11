exports.up = function(knex, Promise) {
  return knex.schema.createTable("steps", table => {
    table.increments();
    table.string("instruction").notNullable();
    table.integer("order_no").unsigned();
    table
      .integer("recipe_id")
      .unsigned()
      .notNullable();
    table
      .foreign("recipe_id")
      .references("id")
      .on("recipes");
  });
};

exports.down = function(knex, Promise) {
  knex.schema.dropTableIfExists("steps");
};
