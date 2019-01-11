
exports.up = function(knex, Promise) {
  return knex.schema.createTable("steps", table => {
    table.increments();
    table.string("step_name").notNullable();
    table.integer("step_number");
    //create columns
    table.integer("recipe_id").unsigned();
    //link columns
    table.foreign("recipe_id").references("id").on("recipes");
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("steps");
};
