exports.up = function(knex, Promise) {
  return knex.schema.createTable("ingredients", table => {
    table.increments();
    table
      .integer("recipe_id")
      .unsigned()
      .references("id")
      .inTable("recipes");
    table.real("quantity").notNullable();
    table.string("measure").notNullable();
    table.string("name").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("ingredients");
};
