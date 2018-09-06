exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipies", function(tbl) {
    tbl.increments();

    tbl
      .string("Name", 256)
      .notNullable()
      .unique()
      .defaultTo("NotProvided");

    tbl
      .integer("dishes_Id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("dishes")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function(knex, Promise) {};
