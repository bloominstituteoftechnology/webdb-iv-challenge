exports.up = function(knex, Promise) {
  return knex.schema.createTable("ingredients", table => {
    table.increments();
    table.string("name").notNullable();
    table.integer("quantity").defaultTo(0);
    table
      .integer("recipe_id")
      .notNullable()
      .references("id")
      .inTable("recipe_box")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("ingredients");
};
