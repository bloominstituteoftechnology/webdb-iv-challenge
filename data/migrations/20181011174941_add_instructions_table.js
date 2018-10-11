exports.up = function(knex, Promise) {
  return knex.schema.createTable("instructions", function(tbl) {
    tbl.increments();

    tbl.string("name").notNullable();
    tbl
      .integer("recipe_id")
      .unsigned()
      .references("id")
      .inTable("recipes");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("instructions");
};
