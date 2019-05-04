exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipes", t => {
    t.increments();
    t.string("name", 33).notNullable();
    t.integer("dish_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("dishes");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("recipes");
};
