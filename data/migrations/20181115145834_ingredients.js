exports.up = knex =>
  knex.schema.createTable("ingredients", table => {
    table.increments();
    table.string("name", 255).notNullable();
    table.unique("name");
  });

exports.down = knex => knex.schema.dropTableIfExists("ingredients");
