exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipes", table => {
    table.increments();
    table.string("name");
    table
      .integer("dish_id")
      .unsigned()
      .references("id")
      .inTable("dishes");
    table.json("instructions");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("recipes");
};
