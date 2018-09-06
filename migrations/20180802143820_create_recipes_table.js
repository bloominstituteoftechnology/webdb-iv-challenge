exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipe_box", table => {
    table.increments();
    table.string("name").notNullable();
    table.string("steps").notNullable();
    table
      .integer("dish_id")
      .notNullable()
      .references("id")
      .inTable("dishes")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("recipe_box");
};
