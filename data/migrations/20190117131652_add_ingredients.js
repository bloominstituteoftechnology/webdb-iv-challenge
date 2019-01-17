exports.up = function(knex, Promise) {
  return knex.schema.createTable("ingredients", function(tbl) {
    // primary key
    tbl.increments(); // defaults to a column named id
    // other fields
    tbl.string("name", 255).notNullable;

    // foreign key example

    // constraints
    tbl.unique("name", "uq_name_ingredients");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("ingredients");
};
