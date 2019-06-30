exports.up = function(knex, Promise) {
  return knex.schema.createTable("shopping_list", function(tbl) {
    tbl.increments();

    tbl.string("name").notNullable();
    tbl
      .integer("ingredient_id")
      .unsigned()
      .references("id")
      .inTable("ingredients");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("shopping_list");
};
