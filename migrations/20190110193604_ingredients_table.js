
exports.up = function(knex, Promise) {
    return knex.schema.createTable("ingredients", ingredients => {
        ingredients.increments();
        ingredients.string("name", 255).notNullable();
        ingredients
          .integer("recipe_id")
          .unsigned()
          .references("id")
          .inTable("recipes")
          .notNullable();
        ingredients.float("quantity").notNullable();
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('ingredients')
};
