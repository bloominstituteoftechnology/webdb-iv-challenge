exports.up = function(knex, Promise) {
  return knex.schema.createTable("instructions", tbl => {
    tbl.increments();
    tbl.string("step_description").notNullable();
    tbl
      .integer("order")
      .unsigned()
      .notNullable();
    tbl
      .integer("recipe_id")
      .unsigned()
      .references("id")
      .inTable("recipes")
      .notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("instructions");
};
