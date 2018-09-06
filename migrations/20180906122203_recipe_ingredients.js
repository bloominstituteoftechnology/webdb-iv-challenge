
exports.up = function(knex, Promise) {
    return knex.schema.createTable("recipe_ingredients", function(table) {
        table
          .integer("ingredient_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("ingredients");
          table
          .integer("recipe_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("recipes");
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("recipe_ingredients");
};
