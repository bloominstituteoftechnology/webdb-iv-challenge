exports.up = knex => {
  knex.schema.createTable('ingredients', table => {
    table.increments();

    table
      .string('name', 128)
      .notNullable()
      .unique('ingredient_name');
  });
};

exports.down = knex => knex.schema.dropTableIfExists('ingredients');
