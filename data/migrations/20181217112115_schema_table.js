exports.up = function(knex, Promise) {
  return knex.schema
            .createTable("recipes", function(recipe) {
                // Add primary key ID
                recipe.increments();
            });
            .createTable("dishes", function(recipe) {
                // Add primary key ID
                recipe.increments();
            });
            .createTable("ingredients", function(recipe) {
                // Add primary key ID
                recipe.increments();
            });
            .createTable("instructions", function(recipe) {
                // Add primary key ID
                recipe.increments();
            });
            .createTable("map", function(recipe) {
                // Add primary key ID
                recipe.increments();
            });
};

exports.down = function(knex, Promise) {
    // Rollback
    return Promise.all([
        knex.schema.dropTableIfExists("recipes"),
        knex.schema.dropTableIfExists("dishes"),
        knex.schema.dropTableIfExists("ingredients"),
        knex.schema.dropTableIfExists("instructions"),
        knex.schema.dropTableIfExists("map")
    ])
};
