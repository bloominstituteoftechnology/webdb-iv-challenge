exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipes_instructions", table => {
    table
      .integer("recipe_id")
      .unsigned()
      .notNullable();
    table
      .foreign("recipe_id")
      .references("id")
      .on("recipes");
    table
      .integer("instruction_id")
      .unsigned()
      .notNullable();
    table
      .foreign("instruction_id")
      .references("id")
      .on("instructions");
    table.integer("step");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("recipes_instructions");
};
