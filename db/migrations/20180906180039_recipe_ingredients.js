
exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipe_ingredients", function(tbl){
    tbl.increments()
    tbl
      .integer("recipe_id")
      .unsigned()
      .references("id")
      .inTable("recipes")
    tbl
      .integer("ingredient_id")
      .unsigned()
      .references("id")
      .inTable("ingredients")
    tbl 
      .float("quantity")
    tbl
      .string("unit_of_measure")

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("recipe_ingredients")
};
