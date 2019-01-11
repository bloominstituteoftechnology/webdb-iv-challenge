
exports.up = function(knex, Promise) {
  return knex.schema.createTable("ingredients", table => {
   table.increments();
   table.string("ingredient_name").notNullable();
   table.float("quantity").notNullable();
   //create column
   table.integer("recipe_id").unsigned();
   //link column
   table.foreign("recipe_id").references("id").on("recipe");
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("ingredients");
};
