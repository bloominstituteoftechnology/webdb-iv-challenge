exports.up = function(knex, Promise) {
  return knex.schema.createTable("instructions", t => {
    t.increments();
    t.string("instruction_array")
      .notNullable()
      .unique("instruction_array");
    t.integer("recipe_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("recipes");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("instructions");
};
