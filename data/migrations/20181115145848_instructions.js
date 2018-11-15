exports.up = knex =>
  knex.schema.createTable("instructions", table => {
    table.increments();
    table
      .integer("recipe_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("recipes");
    table
      .integer("step_number")
      .notNullable()
      .unsigned();
    table.string("step", 255).notNullable();
  });

exports.down = knex => knex.schema.dropTableIfExists("instructions");
