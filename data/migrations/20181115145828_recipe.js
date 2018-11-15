exports.up = knex =>
  knex.schema.createTable("recipes", table => {
    table.increments();
    table.string("name", 255).notNullable();
    table
      .integer("dish_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("dishes");
    table.unique("name");
  });

exports.down = knex => knex.schema.dropTableIfExists("recipes");
