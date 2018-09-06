exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipes", function(tbl) {
    tbl
        .increments();

    tbl
        .string("name", 128)
        .notNullable();

    tbl
        .integer("dish_id")
        .notNullable();

    tbl
        .integer("ingredient_1");

    tbl
        .integer("quantity_1");

    tbl
        .integer("ingredient_2");

    tbl
        .integer("quantity_2");

    tbl
        .integer("ingredient_3");

    tbl
        .integer("quantity_3");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("recipes");
};
