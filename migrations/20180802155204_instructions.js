exports.up = function(knex, Promise) {
  return knex.schema.createTable("ingredients", table => {
    table.increments();

    table.string("instruction", 256).notNullable();

    table
      .integer("recipe_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("recipes")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("instructions");
};
