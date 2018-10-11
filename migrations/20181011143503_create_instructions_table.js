exports.up = function(knex, Promise) {
  return knex.schema.createTable("instructions", table => {
    table.increments();
    table.string("steps");
    table.integer("order");
    table
      .integer("recipes_id")
      .unsigned()
      .references("recipes.id");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("instructions");
};
