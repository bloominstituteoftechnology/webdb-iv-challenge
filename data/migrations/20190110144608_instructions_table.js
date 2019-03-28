
exports.up = function(knex, Promise) {
  return knex.schema.createTable("instructions", table => {
    table.increments();
    table.string("name", 280).notNullable();
    table.integer("step");
    table
        .integer("recipes_id")
        .unsigned()
        .references("id")
        .inTable("recipes");
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("instructions");
};
