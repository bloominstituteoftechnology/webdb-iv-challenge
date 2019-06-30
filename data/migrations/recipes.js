exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipes", table => {
    table.increments().primary();
    table.string("name").notNullable();
    table.string("instructions");
    table.string("ingredients");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("recipes");
};