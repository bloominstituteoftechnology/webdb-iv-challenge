exports.up = (knex, Promise) => {
  return knex.schema.createTable('ingredients', tbl => {
    tbl.increments();
    tbl
      .string('name', 255)
      .notNullable()
      .unique();
  });
};

exports.down = (knex, Promise) => knex.schema.dropTableIfExists('ingredients');
