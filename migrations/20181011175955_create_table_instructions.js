exports.up = function(knex, Promise) {
  return knex.schema.createTable("instructions", t => {
    t.increments();
    t.integer("number")
      .unsigned()
      .notNullable();
    t.string("instructions", 33)
      .notNullable()
      .unique("instructions");
    t.integer("recipe_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("recipes");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('instructions');
};
