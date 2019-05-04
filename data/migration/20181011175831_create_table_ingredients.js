exports.up = function(knex, Promise) {
  return knex.schema.createTable("ingredients", t => {
    t.increments();
    t.string("name", 33)
      .notNullable()
      .unique("name");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("ingredients");
};
