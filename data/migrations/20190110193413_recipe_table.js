
exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipes", table => {
     table.increments();
     table.string("recipe_name").notNullable();
     //create column
     table.integer("dish_id").unsigned();
     //link column
     table.foreign("dish_id").references("id").on("dishes");
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("recipes");
};