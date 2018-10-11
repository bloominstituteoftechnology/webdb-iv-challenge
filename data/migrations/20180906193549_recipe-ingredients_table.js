exports.up = function(knex, Promise) {
  //id
  return knex.schema.createTable("recipe_ingredients", function(tbl) {
    tbl.increments();
    //recipe id reference
    tbl
      .integer("recipe_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("recipes");
    //ingredient id referencce
    tbl
      .integer("ingredient_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("ingredients");
    //quantity float
    tbl
      .float("quantity")
      .unsigned()
      .notNullable();
    //stretch-unit of measure string
    tbl.string("unit_of_measure", 30).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("recipe_ingredients");
};
