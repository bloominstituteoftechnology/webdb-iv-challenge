
exports.up = function(knex, Promise) {
  return knex.schema.createTable("steps", table => {
    table.increments();
    table.string("step_name").notNullable();
    table.integer("step_number");
    //create columns
    table.integer("ingredient_id").unsigned();
    table.integer("recipe_id").unsigned();
    //link columns
    table.foreign("ingredient_id").references("id").on("ingredients");
    table.foreign("recipe_id").references("id").on("recipes");
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("steps");
};
