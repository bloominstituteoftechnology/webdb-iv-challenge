
exports.up = function(knex, Promise) {
    return knex.schema.createTable("ingredients", function(table) {
        table.increments();
        table
          .string("ingredients_name")
          .notNullable()
          .unique("ingredients_name");
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("ingredients");
};
