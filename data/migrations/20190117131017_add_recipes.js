exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipes", function(tbl) {
    // primary key
    tbl.increments(); // defaults to a column named id
    // other fields
    tbl
      .string("name", 255)
      .notNullable()
      .unique();
    tbl.text("instruction").notNullable();
    // foreign key example
    tbl
      .integer("dish_id")
      .unsigned()
      .references("id")
      .inTable("dishes");
    // constraints
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("recipes");
};
