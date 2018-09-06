exports.up = function(knex, Promise) {
  return knex.schema.createTable(`recipie`, table => {
    table.increments(`id`).primary();
    table
      .string(`name`, 128)
      .notNullable()
      .unique();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable(`recipie`);
};
