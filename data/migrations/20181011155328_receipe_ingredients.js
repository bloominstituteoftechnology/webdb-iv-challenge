exports.up = knex => {
  knex.schema.createTable('recipe_ingredients', table => {
    table.increments();

    table
      .integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes');

    table
      .integer('ingredient_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('ingredients');

    table
      .float('quantity')
      .unsigned()
      .notNullable();
  });
};

exports.down = knex => knex.schema.dropTable('recipe_ingredients');
