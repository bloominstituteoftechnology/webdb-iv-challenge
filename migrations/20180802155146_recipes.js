exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipes", table => {
    table.increments();

    table.string("name", 256).notNullable();

    // Foreign Key
    table
      .integer("dish_id")
      .unsigned()
      .references("id")
      .inTable("dishes")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("recipes");
};
