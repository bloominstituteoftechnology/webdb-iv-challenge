exports.up = function(knex, Promise) {
  return knex.schema.createTable(`instruction`, table => {
    table.increments(`id`).primary();
    table
      .string(`instruction`, 300)
      .notNullable()
      .unique();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable(`instruction`);
};
