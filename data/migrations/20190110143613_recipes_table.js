
exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipes", table => {
    table.increments();
    table.string("name", 280).notNullable();
    table
        .integer("dishes_id")
        .unsigned()
        .references("id")
        .inTable("dishes");
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("recipes");
};
