
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes_ingredients', table => {
      table.increments()
      table
      .integer("recipes_id")
      .unsigned()
      .references("recipes.id");
      table
        .integer("ingredients_id")
        .unsigned()
        .references("ingredients.id");
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('recipes_ingredients')
  };
  