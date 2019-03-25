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
        .integer("ingredient_id");

    tbl
        .integer("quantity_id");
        
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("recipes");
};
