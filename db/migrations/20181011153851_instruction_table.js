exports.up = function(knex, Promise) {
  return knex.schema.createTable("instructions", tbl => {
    tbl.increments();
    tbl
      .integer("recipe_id")
      .unsigned()
      .references("recipes.id");
    tbl.integer("step");

    tbl.string("instruction", 20).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("instructions");
};
