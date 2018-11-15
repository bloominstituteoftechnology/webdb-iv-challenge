exports.up = knex =>
  knex.schema.createTable("recipes_ingredients", table => {
    table.increments();
    table
      .integer("recipe_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("recipes");
    table
      .integer("ingredient_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("ingredients");
    table
      .float("quantity")
      .notNullable()
      .unsigned();
  });

exports.down = knex => knex.schema.dropTableIfExists("recipes_ingredients");
