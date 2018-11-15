exports.up = function(knex, Promise) {
  return knex.schema.createTable("instructions", tbl => {
    tbl.increments();
    tbl.string("step", 255).notNullable();
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
