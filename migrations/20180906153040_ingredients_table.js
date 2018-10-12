
exports.up = function(knex, Promise) {
  return knex.schema.createTable("instructions", function(tbl) {
    tbl.increments().primary();
    tbl.string("description").notNullable();
    tbl.integer("quantity").notNullable();
    tbl.integer("ingredient_id")
    .references("id")
    .inTable("ingredient_names")
    .onDelete('CASCADE');
    tbl.integer("step");
    tbl.integer("recipe_id")
    .references("id")
    .inTable("recipes")
    .onDelete('CASCADE');
  })
};

exports.down = function(knex, Promise) {
  
};
